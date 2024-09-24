/** @type {import('@yarnpkg/types')} */
const { defineConfig } = require('@yarnpkg/types')
const { compareVersions } = require('compare-versions')

const workspaceCheckExclusions = []
const dependencyCheckExclusions = []

module.exports = defineConfig({
  async constraints({ Yarn }) {
    const hasFixFlag = process.argv.some((arg) => arg === '--fix')

    // Ensure all workspaces use the same node version and yarn version
    for (const workspace of Yarn.workspaces()) {
      if (workspaceCheckExclusions.includes(workspace.manifest.name)) {
        continue
      }

      workspace.set('engines.node', `>=18.18.0`)
      workspace.set('packageManager', `yarn@4.4.0`)
    }

    // Collect all dependencies and their versions into a Map<string, Set<string>>
    const dependencyToVersions = {}
    for (const workspace of Yarn.workspaces()) {
      const {
        devDependencies = {},
        peerDependencies = {},
        dependencies = {},
      } = workspace.manifest

      ;[devDependencies, peerDependencies, dependencies].forEach(
        (dependencies_) => {
          Object.entries(dependencies_).forEach(([name, version]) => {
            if (dependencyCheckExclusions.includes(name)) {
              return
            }

            if (name in dependencyToVersions) {
              dependencyToVersions[name].add(version)
            } else {
              dependencyToVersions[name] = new Set([version])
            }
          })
        },
      )
    }

    // Check if a dependency has multiple versions
    // If so, update all dependencies to the latest version
    Object.entries(dependencyToVersions).forEach(([name, versions]) => {
      if (versions.size > 1) {
        const sortedVersions = Array.from(versions).sort(compareVersions)
        const latestVersion = sortedVersions[sortedVersions.length - 1]

        if (!hasFixFlag) {
          console.log(
            `🚨 ${name} has multiple versions: ${Array.from(versions).join(
              ', ',
            )}. Run yarn constraints --fix to update to ${latestVersion}.\n`,
          )
        }

        Yarn.dependencies({ ident: name }).forEach((dependency) => {
          dependency.update(latestVersion)
        })
      }
    })
  },
})
