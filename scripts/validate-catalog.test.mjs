import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const validatorPath = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  'validate-catalog.mjs',
);

function entry(overrides = {}) {
  return {
    slug: 'example',
    skillId: 'example',
    displayName: 'Example',
    category: 'development',
    description: 'Example skill',
    githubUrl: 'https://github.com/example/example',
    license: 'MIT',
    status: 'active',
    ...overrides,
  };
}

function runValidator(entries) {
  const fixtureDirectory = fs.mkdtempSync(
    path.join(os.tmpdir(), 'awesome-skills-validator-'),
  );
  try {
    for (const fixtureEntry of entries) {
      const entryDirectory = path.join(
        fixtureDirectory,
        'skills',
        ...fixtureEntry.path,
      );
      fs.mkdirSync(entryDirectory, { recursive: true });
      fs.writeFileSync(
        path.join(entryDirectory, 'skill.json'),
        JSON.stringify(fixtureEntry.data),
      );
    }
    return execFileSync(process.execPath, [validatorPath], {
      cwd: fixtureDirectory,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    });
  } finally {
    fs.rmSync(fixtureDirectory, { recursive: true, force: true });
  }
}

function validatorError(entries) {
  try {
    runValidator(entries);
  } catch (error) {
    return error.stderr;
  }
  assert.fail('Expected catalog validation to fail');
}

test('accepts a valid entry', () => {
  const output = runValidator([
    { path: ['development', 'example'], data: entry() },
  ]);

  assert.match(output, /Validated 1 skill entries/);
});

test('rejects credential-bearing URLs', () => {
  const errorOutput = validatorError([
    {
      path: ['development', 'example'],
      data: entry({ githubUrl: 'https://user:secret@example.com/skill' }),
    },
  ]);

  assert.match(errorOutput, /must not include credentials/);
});

test('rejects malformed HTTPS URLs', () => {
  const errorOutput = validatorError([
    {
      path: ['development', 'example'],
      data: entry({ githubUrl: 'https://exa mple.com/skill' }),
    },
  ]);

  assert.match(errorOutput, /must be a valid URL/);
});

test('rejects duplicate skill IDs', () => {
  const errorOutput = validatorError([
    { path: ['development', 'example'], data: entry() },
    {
      path: ['design', 'other'],
      data: entry({
        slug: 'other',
        skillId: 'example',
        category: 'design',
      }),
    },
  ]);

  assert.match(errorOutput, /duplicates skillId example/);
});

test('rejects entries outside the documented folder depth', () => {
  const errorOutput = validatorError([
    {
      path: ['development', 'example', 'nested'],
      data: entry(),
    },
  ]);

  assert.match(
    errorOutput,
    /must use skills\/<category>\/<slug>\/skill\.json/,
  );
});
