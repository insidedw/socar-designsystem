module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended', 'plugin:storybook/recommended', "plugin:prettier/recommended", "plugin:import/recommended"],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh','prettier'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "spaced-comment": ["error", "always", { "markers": ["/"] }],
    "prettier/prettier": ["error"],
    "semi": ["error", "never"],
    "import/no-unresolved": "off",
    "import/no-cycle": [
      "error",
      {
        "maxDepth": 10,
        "ignoreExternal": true
      }
    ],
  },
}
