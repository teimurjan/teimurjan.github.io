<p align="center">
  <a href="https://teimurjan.dev">
    <img alt="logo" src="./workspaces/website/assets/images/logo.png" width="200" />
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
![](https://github.com/teimurjan/teimurjan.github.io/actions/workflows/deploy-serverless.yml/badge.svg)

</div>

Hey! 👋 This repository contains the source code for my personal website hosted on GitHub Pages.

## 🤷 What makes this project special?

1. Tech stack: [GraphCMS](https://graphcms.com/) + [Next](https://nextjs.org/) + [TypeScript](https://www.typescriptlang.org/).
2. [Atomic Design Methodology](https://atomicdesign.bradfrost.com/).
3. [GraphQL TypeScript codegen](https://www.graphql-code-generator.com/).
4. Resume generation on website start/build via [react-pdf](https://react-pdf.org/).
5. GitHub Actions-based automatic deployment.
6. Monorepo project structure with [yarn workspaces](https://yarnpkg.com/features/workspaces).

## 🚀 Quick start

1.  **Install dependencies**
    ```shell
    yarn
    ```

2.  **Run locally**
    ```shell
    yarn workspace @teimurjan/website start
    ```

3.  **Build**
    ```shell
    yarn workspace @teimurjan/website build
    ```

4.  **Generate GraphQL typings**
    ```shell
    yarn workspace @teimurjan/gql-types codegen
    ```

## ✈️ Deployment

GitHub Actions is mechanism reponsible for the deployments. There is a workflow file [deploy.yml](./.github/workflows/deploy.yml) that starts when the code or data are changed.

<div align="center">
  <img alt="deployment" src="./docs/images/deployment.png" width="1000" />
</div>

## ➡️ Plans

- [x] Automatic deployment via serverless function when a GraphCMS entity changes.

## 🙏 Contribution

Did you find a bug? Report it in Issues, please.