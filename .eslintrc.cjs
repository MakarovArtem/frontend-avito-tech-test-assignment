module.exports = {
  'settings': {
    'react': {
      'version': 'detect',
    }
  },
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'quotes': ['error', 'single'],
    'indent': ['warn', 4],
    'curly': 'error',
    'block-spacing': 'warn',
    'linebreak-style': ['warn', 'windows'],
    'no-trailing-spaces': 'error',
    'object-curly-newline': ['error', {
        'ObjectExpression': { 'multiline': true },
        'ObjectPattern': { 'multiline': true },
        'ImportDeclaration': 'never',
        'ExportDeclaration': { 'multiline': true, 'minProperties': 3 }
    }],
    'object-curly-spacing': ['warn', 'always'],
    'semi': 'warn',
    'space-before-blocks': 'warn',
    '@typescript-eslint/strict-boolean-expressions': 'warn',
    '@typescript-eslint/prefer-nullish-coalescing': 'warn',
    '@typescript-eslint/ban-ts-comment': 'off',
    'react-hooks/exhaustive-deps': 'error'
  },
}
