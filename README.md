<p align="center">
  <a href="https://teimurjan.dev">
    <img alt="Gatsby" src="./src/assets/images/logo.png" width="200" />
  </a>
</p>
<h1 align="center">
  <a href="https://teimurjan.dev">
    teimurjan.dev
  </a>
</h1>

Hey! 👋 This repository contains the source code for my personal website hosted on GitHub Pages.

## 🤷 What makes this project special?

1. Tech stack: [GraphCMS](https://graphcms.com/) + [Gatsby](https://www.gatsbyjs.com/) + [TypeScript](https://www.typescriptlang.org/).
2. [Atomic Design Methodology](https://atomicdesign.bradfrost.com/).
3. [GraphQL TypeScript codegen](https://www.graphql-code-generator.com/).
4. Resume generation on website start/build via [react-pdf](https://react-pdf.org/).
5. GitHub Actions-based automatic deployment.

## 🚀 Quick start

1.  **Run locally**
    ```shell
    yarn start
    ```

2.  **Build**

    ```shell
    yarn build
    ```

3.  **Generate GraphQL typings**

    Run the project locally so Gatsby's GraphQL API is available. After that run:

    ```shell
    yarn codegen
    ```

## ➡️ Plans

- [ ] Automatic deployment via serverless function when a GraphCMS entity changes.
- [ ] Extra data fethcing from LinkedIn (recommendations, skills, endorsements, etc.).

## 🙏 Contribution

Did you find a bug? Report it in Issues, please.