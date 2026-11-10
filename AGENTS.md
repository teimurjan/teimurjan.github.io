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

```

## Architecture

### Monorepo Structure (Yarn Workspaces)

```
workspaces/
├── website/           # Main Next.js website (deployed to GitHub Pages)
├── resume/            # React-PDF resume components (shared library)
├── gql-client/        # GraphQL client & generated types (shared library)
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

- **gql-client**: Exports `getSdk()` function used by website and profile-readme
- **resume**: Exports the `harvard` resume template
- **resume/cmd/render.tsx**: Renders `ResumeQuery` JSON from stdin to a PDF. The Resume plugin in `~/Projects/routines` runs it with bun.

### Environment Variables

- `HYGRAPH_URL`: GraphQL endpoint (required for codegen and runtime)
- `GQL_API_GITHUB_TOKEN`: GitHub token for website data fetching

## Code Style

- Biome for linting/formatting (single quotes, no semicolons, ES5 trailing commas)
- Line width: 100 characters
- Indentation: 2 spaces
