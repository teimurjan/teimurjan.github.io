import { defineConfig } from 'tsup'
import { Plugin } from 'esbuild'
import path from 'path'
import fs from 'fs'
const WORKSPACE_REGEXP = /^@teimurjan\/(.+)$/

const workspaceAliasPlugin = (): Plugin => ({
  name: 'workspace-alias',
  setup(build) {
    build.onResolve({ filter: WORKSPACE_REGEXP }, (args) => {
      const pkg = args.path.replace('@teimurjan/', '')
      const pkgPath = path.resolve(__dirname, '..', pkg)
      const pkgJsonPath = path.resolve(pkgPath, 'package.json')
      const main = JSON.parse(fs.readFileSync(pkgJsonPath, 'utf8')).main
      const pkgIndexPath = path.resolve(pkgPath, main)
      return {
        path: pkgIndexPath,
        external: false,
      }
    })
  },
})

export default defineConfig({
  entry: ['src/index.ts'],
  clean: true,
  noExternal: [WORKSPACE_REGEXP],
  esbuildPlugins: [workspaceAliasPlugin()],
})
