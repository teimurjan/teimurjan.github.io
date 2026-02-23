# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Install dependencies
yarn

# Development
yarn workspace @teimurjan/website dev              # Run website locally (Next.js with Turbopack)
yarn workspace @teimurjan/resume-generator dev     # Run resume generator locally
yarn workspace @teimurjan/firebase-functions dev   # Run Firebase functions emulator

# Build
yarn workspace @teimurjan/website build
yarn workspace @teimurjan/resume-generator build
yarn workspace @teimurjan/firebase-functions build

# GraphQL codegen (requires HYGRAPH_URL env var)
env HYGRAPH_URL=<url> yarn workspace @teimurjan/gql-client codegen

# Generate resume and OpenGraph images
yarn workspace @teimurjan/website generate

# Generate GitHub profile README
yarn workspace @teimurjan/profile-readme generate-readme

# Linting
yarn lint                    # Check all workspaces with Biome
yarn lint:fix                # Fix lint issues
yarn typecheck:all           # TypeScript check all workspaces

# Firebase deployment
yarn workspace @teimurjan/firebase-functions deploy
```

## Architecture

### Monorepo Structure (Yarn Workspaces)

```
workspaces/
├── website/           # Main Next.js website (deployed to GitHub Pages)
├── resume-generator/  # Resume generation UI (deployed to Vercel)
├── resume/            # React-PDF resume components (shared library)
├── gql-client/        # GraphQL client & generated types (shared library)
├── firebase-functions/ # Firebase Cloud Functions (OpenAI integration)
├── functions/         # Vercel serverless functions
├── profile-readme/    # GitHub profile README generator
├── github-client/     # Octokit wrapper (shared library)
└── utils/             # Shared utilities (date/color helpers)
```

### Data Flow

1. **Content Source**: Hygraph (headless CMS) provides all content via GraphQL
2. **GraphQL Codegen**: `gql-client` generates typed SDK from `.graphql` files in `website/documents/`
3. **Resume Generation**: `resume` package uses react-pdf to render PDF from Hygraph data
4. **Build Pipeline**: Website build runs `generate-resume` and `generate-opengraph` before Next.js build

### Key Integration Points

- **gql-client**: Exports `getSdk()` function used by website, resume-generator, and profile-readme
- **resume**: Exports two resume templates (`custom` and `harvard`) and cover letter component
- **firebase-functions**: Handles async job application generation via QStash pub/sub

### Environment Variables

- `HYGRAPH_URL`: GraphQL endpoint (required for codegen and runtime)
- `GQL_API_GITHUB_TOKEN`: GitHub token for website data fetching
- Firebase/Vercel configs in respective workspace `.env` files

## Code Style

- Biome for linting/formatting (single quotes, no semicolons, ES5 trailing commas)
- Line width: 100 characters
- Indentation: 2 spaces
