import fs from 'node:fs';
import path from 'node:path';

const catalogRootDirectory = process.cwd();
const catalogEntriesDirectory = path.join(catalogRootDirectory, 'skills');
const requiredFieldNames = ["slug", "skillId", "displayName", "category", "description", "githubUrl", "license", "status"];
const seenSlugs = new Set();
const seenSkillIds = new Set();
const validationErrors = [];

function listJsonEntryFiles(directoryPath) {
  const collectedFilePaths = [];
  if (!fs.existsSync(directoryPath)) {
    return collectedFilePaths;
  }
  const directoryEntries = fs.readdirSync(directoryPath, { withFileTypes: true });
  for (const directoryEntry of directoryEntries) {
    const fullPath = path.join(directoryPath, directoryEntry.name);
    if (directoryEntry.isDirectory()) {
      const nestedFilePaths = listJsonEntryFiles(fullPath);
      for (const nestedFilePath of nestedFilePaths) {
        collectedFilePaths.push(nestedFilePath);
      }
    } else if (directoryEntry.isFile() && directoryEntry.name === 'skill.json') {
      collectedFilePaths.push(fullPath);
    }
  }
  return collectedFilePaths.sort();
}

function readJsonFile(jsonFilePath) {
  const rawFileContents = fs.readFileSync(jsonFilePath, 'utf8');
  try {
    return JSON.parse(rawFileContents);
  } catch (parseError) {
    validationErrors.push(`${jsonFilePath} is not valid JSON: ${parseError.message}`);
    return null;
  }
}

function validateUrlValue(jsonFilePath, fieldName, fieldValue) {
  if (typeof fieldValue !== 'string') {
    return;
  }
  if (fieldValue.length === 0) {
    return;
  }
  let parsedUrl;
  try {
    parsedUrl = new URL(fieldValue);
  } catch {
    validationErrors.push(`${jsonFilePath} field ${fieldName} must be a valid URL`);
    return;
  }
  if (parsedUrl.protocol !== 'https:') {
    validationErrors.push(`${jsonFilePath} field ${fieldName} must use https://`);
  }
  if (!parsedUrl.hostname) {
    validationErrors.push(`${jsonFilePath} field ${fieldName} must include a hostname`);
  }
  if (parsedUrl.username || parsedUrl.password) {
    validationErrors.push(`${jsonFilePath} field ${fieldName} must not include credentials`);
  }
}

const entryFilePaths = listJsonEntryFiles(catalogEntriesDirectory);
for (const entryFilePath of entryFilePaths) {
  const entryData = readJsonFile(entryFilePath);
  if (!entryData) {
    continue;
  }
  const relativeEntryPath = path.relative(catalogEntriesDirectory, entryFilePath);
  const pathParts = relativeEntryPath.split(path.sep);
  const folderCategory = pathParts[0];
  const folderSlug = pathParts[1];
  if (pathParts.length !== 3) {
    validationErrors.push(
      `${entryFilePath} must use skills/<category>/<slug>/skill.json`,
    );
    continue;
  }
  for (const requiredFieldName of requiredFieldNames) {
    const requiredFieldValue = entryData[requiredFieldName];
    if (typeof requiredFieldValue !== 'string' || requiredFieldValue.trim().length === 0) {
      validationErrors.push(`${entryFilePath} missing required string field: ${requiredFieldName}`);
    }
  }
  if (entryData.category !== folderCategory) {
    validationErrors.push(`${entryFilePath} category must match folder name ${folderCategory}`);
  }
  if (entryData.slug !== folderSlug) {
    validationErrors.push(`${entryFilePath} slug must match folder name ${folderSlug}`);
  }
  if (seenSlugs.has(entryData.slug)) {
    validationErrors.push(`${entryFilePath} duplicates slug ${entryData.slug}`);
  }
  seenSlugs.add(entryData.slug);
  if (seenSkillIds.has(entryData.skillId)) {
    validationErrors.push(`${entryFilePath} duplicates skillId ${entryData.skillId}`);
  }
  seenSkillIds.add(entryData.skillId);
  for (const [fieldName, fieldValue] of Object.entries(entryData)) {
    if (fieldName.endsWith('_url') || fieldName === 'githubUrl' || fieldName === 'skillsShUrl' || fieldName === 'homepage_url' || fieldName === 'agent_card_url' || fieldName === 'agent_json_url' || fieldName === 'a2a_endpoint_url') {
      validateUrlValue(entryFilePath, fieldName, fieldValue);
    }
  }
}

if (entryFilePaths.length === 0) {
  console.log('No skill entries found yet. Empty catalog is valid.');
}

if (validationErrors.length > 0) {
  console.error(validationErrors.join('\n'));
  process.exit(1);
}

console.log(`Validated ${entryFilePaths.length} skill entries.`);
