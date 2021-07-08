module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
  },
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    // js/ts
    'eol-last': 'error',
    'no-trailing-spaces': 'error',
    'comma-style': ['error', 'last'],
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    camelcase: ['error', { properties: 'never' }],
    'arrow-parens': ['error', 'as-needed'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: false
        }
      }
    ],
    // vue
    'vue/no-v-html': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/require-default-prop': 'off'
  }
}
