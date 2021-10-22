module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx', '.mjs'],
  },
  'import/extensions': [
    'error',
    'ignorePackages',
    {
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
      mjs: 'never',
    },
  ],
}
