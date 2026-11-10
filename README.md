# Awesome Skills

A curated, PR-friendly directory maintained by WunderCorp. Entries live as JSON files under `skills/<category>/<slug>/skill.json`. The README is generated from those files.

## Contributing

Add one entry per pull request, run the validator, regenerate this README, and keep the entry in the correct category folder.

```bash
node scripts/validate-catalog.mjs
node scripts/generate-readme.mjs
```

## Directory

### Accessibility

| Skill | Description | Install | Links |
|---|---|---|---|
| Accessibility | Inclusive UI accessibility guidance for semantic HTML, ARIA, keyboard navigation, focus management, screen-reader behavior, accessible forms, reduced motion, landmarks, live regions, and assistive-technology-friendly components across frontend apps. | `npx --yes skills add https://github.com/wundercorp/accessibility-skill --skill accessibility` | [GitHub](https://github.com/wundercorp/accessibility-skill)<br>[skills.sh](https://skills.sh/wundercorp/accessibility-skill/accessibility) |
| Contrast Guard | UI legibility and contrast-safety guidance for preventing unreadable foreground/background pairings, theme-toggle contrast regressions, risky overlays, accidental palette leakage, and low-contrast interactive states across generated frontend apps. | `npx --yes skills add https://github.com/wundercorp/contrast-guard-skill --skill contrast-guard` | [GitHub](https://github.com/wundercorp/contrast-guard-skill)<br>[skills.sh](https://skills.sh/wundercorp/contrast-guard-skill/contrast-guard) |

### Architecture

| Skill | Description | Install | Links |
|---|---|---|---|
| Coherence | Prompt, skill, and technology-direction reconciliation guidance for turning mismatched requirements, overlapping skills, contradictory instructions, and implementation anti-patterns into a coherent strategy that works well together. | `npx --yes skills add https://github.com/wundercorp/coherence-skill --skill coherence` | [GitHub](https://github.com/wundercorp/coherence-skill)<br>[skills.sh](https://skills.sh/wundercorp/coherence-skill/coherence) |

### Deployment

| Skill | Description | Install | Links |
|---|---|---|---|
| Cloud Deployment for ShipYou | Deployment-readiness guidance for containerizing apps, producing Docker-friendly source bundles, adding health checks, and preparing projects for ShipYou handoff. | `npx --yes skills add https://github.com/wundercorp/cloud-deployment-shipyou-skill --skill cloud-deployment-shipyou` | [GitHub](https://github.com/wundercorp/cloud-deployment-shipyou-skill)<br>[skills.sh](https://skills.sh/wundercorp/cloud-deployment-shipyou-skill/cloud-deployment-shipyou) |

### Design

| Skill | Description | Install | Links |
|---|---|---|---|
| Batman | Dark-mode-first website theming guidance for adding accessible light/dark switches, root theme contracts, no-flash initialization, persisted preferences, semantic tokens, and common theming pitfall prevention across frontend codebases. | `npx --yes skills add https://github.com/wundercorp/batman-skill --skill batman` | [GitHub](https://github.com/wundercorp/batman-skill)<br>[skills.sh](https://skills.sh/wundercorp/batman-skill/batman) |
| Bauhaus | Bold visual design language guidance for building modern premium interfaces with oversized typography, geometric composition, disciplined color systems, section-level contrast, and striking yet consistent theme expression. | `npx --yes skills add https://github.com/wundercorp/bauhaus-skill --skill bauhaus` | [GitHub](https://github.com/wundercorp/bauhaus-skill)<br>[skills.sh](https://skills.sh/wundercorp/bauhaus-skill/bauhaus) |
| Gradient Mesh | Gradient mesh website design guidance for generating tasteful mesh backgrounds, CSS/SVG/canvas assets, animation-safe visual systems, accessibility overlays, performance budgets, and optional MeshGradientPy-inspired Python mesh workflows. | `npx --yes skills add https://github.com/wundercorp/gradient-mesh-skill --skill gradient-mesh` | [GitHub](https://github.com/wundercorp/gradient-mesh-skill)<br>[skills.sh](https://skills.sh/wundercorp/gradient-mesh-skill/gradient-mesh) |
| Themable | Website theme palette guidance for adding switchable theme families, semantic token utilities, accessible palette pickers, persisted preferences, CSS variable generation, and anti-pattern prevention across frontend codebases. | `npx --yes skills add https://github.com/wundercorp/themable-skill --skill themable` | [GitHub](https://github.com/wundercorp/themable-skill)<br>[skills.sh](https://skills.sh/wundercorp/themable-skill/themable) |

### Development

| Skill | Description | Install | Links |
|---|---|---|---|
| Doctor | Runtime dependency doctor and generated-app auto-healing guidance for unresolved imports, missing packages, stale installs, package.json drift, lockfile drift, Vite import-analysis errors, module-not-found failures, and dev-server preview failures. | `npx --yes skills add https://github.com/wundercorp/doctor-skill --skill doctor` | [GitHub](https://github.com/wundercorp/doctor-skill)<br>[skills.sh](https://skills.sh/wundercorp/doctor-skill/doctor) |
| Professional Developer | Production-grade development guidance for clean structure, formatting, design patterns, testing, maintainability, and professional code review behavior. | `npx --yes skills add https://github.com/wundercorp/professional-developer-skill --skill professional-developer` | [GitHub](https://github.com/wundercorp/professional-developer-skill)<br>[skills.sh](https://skills.sh/wundercorp/professional-developer-skill/professional-developer) |
| Wiring | Application wiring sanity-check and repair guidance for making sure run commands, entry points, imports, CSS and asset references, dependencies, routes, environment variables, build configuration, monorepo links, Docker files, and deployment paths are correctly connected so apps can run and ship. | `npx --yes skills add https://github.com/wundercorp/wiring-skill --skill wiring` | [GitHub](https://github.com/wundercorp/wiring-skill)<br>[skills.sh](https://skills.sh/wundercorp/wiring-skill/wiring) |

### Documentation

| Skill | Description | Install | Links |
|---|---|---|---|
| Archivist | Repository history and change-maintenance guidance for keeping changelogs, change records, release notes, ADRs, migration notes, API notes, deployment notes, and GitHub review templates up to date whenever codebases change. | `npx --yes skills add https://github.com/wundercorp/archivist-skill --skill archivist` | [GitHub](https://github.com/wundercorp/archivist-skill)<br>[skills.sh](https://skills.sh/wundercorp/archivist-skill/archivist) |
| Mimar | Architecture documentation generation guidance and tooling for automatically creating and maintaining ARCHITECTURE.md files with Markdown-friendly diagrams, directory maps, run flows, dependency maps, feature boundaries, implementation notes, and codebase design explanations. | `npx --yes skills add https://github.com/wundercorp/mimar-skill --skill mimar` | [GitHub](https://github.com/wundercorp/mimar-skill)<br>[skills.sh](https://skills.sh/wundercorp/mimar-skill/mimar) |

### Localization

| Skill | Description | Install | Links |
|---|---|---|---|
| Linguist | Internationalization implementation guidance for auto-configuring multilingual sites with locale routing, translation keys, fallback languages, formatting, SEO hreflang metadata, extraction checks, and localization documentation. | `npx --yes skills add https://github.com/wundercorp/linguist-skill --skill linguist` | [GitHub](https://github.com/wundercorp/linguist-skill)<br>[skills.sh](https://skills.sh/wundercorp/linguist-skill/linguist) |

### Maintenance

| Skill | Description | Install | Links |
|---|---|---|---|
| Cleaner | Public-release repository cleaning guidance for removing OS junk, archive metadata, caches, logs, local deployment state, private env files, local databases, dependency artifacts, build clutter, and secret-like content before GitHub pushes or other public deployments. | `npx --yes skills add https://github.com/wundercorp/cleaner-skill --skill cleaner` | [GitHub](https://github.com/wundercorp/cleaner-skill)<br>[skills.sh](https://skills.sh/wundercorp/cleaner-skill/cleaner) |

### Media

| Skill | Description | Install | Links |
|---|---|---|---|
| Ogilvideo | Motion-director-grade video analysis, storyboarding, prompt engineering, animation planning, agentic AI video direction, UI motion systems, production breakdowns, and QA for premium product videos and motion graphics. | `npx --yes skills add https://github.com/wundercorp/ogilvideo-skill --skill ogilvideo` | [GitHub](https://github.com/wundercorp/ogilvideo-skill)<br>[skills.sh](https://skills.sh/wundercorp/ogilvideo-skill/ogilvideo) |
| Yuanjing AI Image Connect | Connect a compatible desktop agent to Yuanjing AI for image generation, image editing, and ecommerce product visuals. The public guide connects an eligible Yuanjing AI account to the official skill. | `npx skills add zhouguida123-svg/yuanjing-image-connect --skill yuanjing-image-connect` | [GitHub](https://github.com/zhouguida123-svg/yuanjing-image-connect)<br>[skills.sh](https://www.skills.sh/zhouguida123-svg/yuanjing-image-connect/yuanjing-image-connect) |

### Security

| Skill | Description | Install | Links |
|---|---|---|---|
| Patcher | Severity-ordered vulnerability patching guidance and tooling for Docker containers, dependency CVEs, zero-day mitigations, frontend security issues, backend package vulnerabilities, CI/CD supply-chain risks, and other exploitable codebase issues while preserving install, build, test, run, and deployment behavior. | `npx --yes skills add https://github.com/wundercorp/patcher-skill --skill patcher` | [GitHub](https://github.com/wundercorp/patcher-skill)<br>[skills.sh](https://skills.sh/wundercorp/patcher-skill/patcher) |
| Svalbard | Security-first application architecture and hardening guidance for secure-by-default apps, authentication, authorization, input validation, browser headers, secrets, data protection, abuse controls, containers, CI/CD, and release verification. | `npx --yes skills add https://github.com/wundercorp/svalbard-skill --skill svalbard` | [GitHub](https://github.com/wundercorp/svalbard-skill)<br>[skills.sh](https://skills.sh/wundercorp/svalbard-skill/svalbard) |

## Repository format

- `CONTRIBUTING.md` explains the review policy.
- `.github/pull_request_template.md` keeps submissions consistent.
- `.github/workflows/validate.yml` validates JSON and README generation.
- `schema/` documents the expected metadata shape.

## License

Directory metadata is MIT licensed unless an entry says otherwise. Each listed project keeps its own license.
