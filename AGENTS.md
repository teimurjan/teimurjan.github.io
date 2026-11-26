# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Install dependencies
yarn

# Development
yarn workspace @teimurjan/website dev              # Run website locally (Next.js with Turbopack)

# Build
yarn workspace @teimurjan/website build

# Generate resume and OpenGraph images
yarn workspace @teimurjan/website generate

# Generate GitHub profile README
yarn workspace @teimurjan/profile-readme generate-readme

# Linting
yarn lint                    # Check all workspaces with Biome
yarn lint:fix                # Fix lint issues
yarn typecheck:all           # TypeScript check all workspaces

```

## Architecture

### Monorepo Structure (Yarn Workspaces)

```
workspaces/
├── website/           # Main Next.js website (deployed to GitHub Pages)
├── resume/            # React-PDF resume components (shared library)
├── site-data/         # Site content from the llm-wiki `website` view (shared library)
├── profile-readme/    # GitHub profile README generator
├── github-client/     # Octokit wrapper (shared library)
└── utils/             # Shared utilities (date/color helpers)
```

### Data Flow

1. **Content Source**: the private `teimurjan/llm-wiki` repo. Its `website` view prints every public record as JSON: `bun run wiki view website --json`.
2. **site-data**: `loadSiteData()` runs that command at build time in `LLM_WIKI_DIR`, default `../../../llm-wiki` from a workspace, and returns typed data.
3. **Images**: logos and talk images live in `website/public/media/`; records hold their public paths.
4. **Build Pipeline**: CI checks out llm-wiki with the `LLM_WIKI_DEPLOY_KEY` deploy key. A push to llm-wiki triggers a redeploy through `repository_dispatch` (`wiki-updated`).

### Key Integration Points

- **site-data**: Exports `loadSiteData()` and the record types, used by website and profile-readme
- **resume**: Exports the `harvard` resume template and `HarvardCv`, which renders wiki CVs with the same Harvard components
- **resume/cmd/render.tsx**: Renders resume JSON (`ResumeData`) from stdin to a PDF. The Resume plugin in `~/Projects/routines` runs it with bun.
- **resume/cmd/render-cv.tsx**: Renders a CV from `~/Projects/llm-wiki` to a PDF: `bun run --silent --cwd ~/Projects/llm-wiki wiki view cv-ai --json | bun workspaces/resume/cmd/render-cv.tsx cv-ai.pdf`. The CV views are `cv-ai`, `cv-performance` and `cv-staff`.

### Environment Variables

- `LLM_WIKI_DIR`: path to the llm-wiki checkout (optional locally)
- `GQL_API_GITHUB_TOKEN`: GitHub token for website data fetching

## Code Style

- Biome for linting/formatting (single quotes, no semicolons, ES5 trailing commas)
- Line width: 100 characters
- Indentation: 2 spaces
