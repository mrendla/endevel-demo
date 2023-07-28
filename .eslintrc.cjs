module.exports = {
    root: true,
    env: {
      browser: true,
      node: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:vue/vue3-essential',
      'plugin:@typescript-eslint/recommended',
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
      parser: '@typescript-eslint/parser',
      sourceType: 'module',
      project: './tsconfig.json',
      extraFileExtensions: ['.vue'],
    },
    plugins: ['vue', '@typescript-eslint'],
    rules: {},
  ignorePatterns: ['dist/'],
  };