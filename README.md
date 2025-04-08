<p align="center">
  <a href="https://teimurjan.dev">
    <img alt="logo" src="./workspaces/website/public/logo.webp" width="200" />
  </a>
</p>
<h1 align="center">
  <a href="https://teimurjan.dev">
    teimurjan.dev
  </a>
</h1>
<div align="center">

![](https://github.com/teimurjan/teimurjan.github.io/actions/workflows/deploy.yml/badge.svg)
![](https://github.com/teimurjan/teimurjan.github.io/actions/workflows/deploy-readme.yml/badge.svg)
![](https://github.com/teimurjan/teimurjan.github.io/actions/workflows/deploy-firebase.yml/badge.svg)

</div>

Hey! 👋 This repository contains the source code for my personal website hosted on GitHub Pages.

## 🤷 What makes this project special?

1. Tech stack: [Hygraph](https://hygraph.com/) + [Next](https://nextjs.org/) + [TypeScript](https://www.typescriptlang.org/).
2. [GraphQL TypeScript codegen](https://www.graphql-code-generator.com/).
3. Resume generation on website start/build via [react-pdf](https://react-pdf.org/).
4. GitHub Actions-based automatic deployment.
5. Monorepo project structure with [yarn workspaces](https://yarnpkg.com/features/workspaces).
6. OpenAI-based job application generation.
7. Pubsub-based interaction when resume generation is scheduled.

## 🚀 Quick start

### Website

1.  **Install dependencies**
    ```shell
    yarn
    ```

2.  **Create environment variables**
    ```shell
    # Copy example env files
    cp workspaces/website/.env.example workspaces/website/.env
    
    # Fill in required values in the .env files
    ```

3.  **Generate GraphQL typings**
    ```shell
    env HYGRAPH_URL=<url> yarn workspace @teimurjan/gql-client codegen
    ```

4.  **Run locally**
    ```shell
    yarn workspace @teimurjan/website dev
    ```

5.  **Build**
    ```shell
    yarn workspace @teimurjan/website build
    ```

### Resume Generator

1.  **Install dependencies**
    ```shell
    yarn
    ```

2.  **Create environment variables**
    ```shell
    # Copy example env files
    cp workspaces/resume-generator/.env.example workspaces/resume-generator/.env
    
    # Fill in required values in the .env files
    ```
3.  **Generate GraphQL typings**
    ```shell
    env HYGRAPH_URL=<url> yarn workspace @teimurjan/gql-client codegen
    ```

4.  **Run locally**
    ```shell
    yarn workspace @teimurjan/resume-generator dev
    ```

5.  **Build**
    ```shell
    yarn workspace @teimurjan/resume-generator build
    ```

## ✈️ Deployment

GitHub Actions is the CI/CD mechanism responsible for deployments through several workflows:

### Website Deployment ([deploy.yml](./.github/workflows/deploy.yml))
Triggered when:
- Code changes are pushed to the main branch (excluding functions and resume generator changes)
- Manually triggered via workflow_dispatch

The workflow:
1. Generates OpenGraph images
2. Generates resume
3. Builds the Next.js application
4. Deploys to GitHub Pages

### Profile README Deployment ([deploy-readme.yml](./.github/workflows/deploy-readme.yml))
Triggered when:
- The website deployment workflow completes
- Manually triggered via workflow_dispatch

The workflow:
1. Generates the GitHub profile README
2. Copies it to the teimurjan/teimurjan repository
3. Commits and pushes the changes

### Firebase Functions Deployment ([deploy-firebase.yml](./.github/workflows/deploy-firebase.yml))
Triggered when:
- Changes are pushed to firebase-functions directory
- Manually triggered via workflow_dispatch

The workflow deploys the Firebase Functions to Firebase.

### Resume Generator Deployment
Triggered on Vercel when:
- Changes are pushed to the main branch.

This workflow deploys generator to Vercel.

