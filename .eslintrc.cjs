module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  extends: [
    'plugin:vue/recommended',
    'plugin:vue-pug/recommended',
    'standard'
  ],
  rules: {
    'vue/no-side-effects-in-computed-properties': 'warn',
    'vue/order-in-components': 'error',
    'vue/html-indent': ['error', 2],
    'vue/script-indent': ['error', 2, { switchCase: 1 }],
    'vue/no-mutating-props': 'warn',
    'vue/no-v-for-template-key': 'warn',
    'vue/valid-next-tick': 'warn',
    'vue/one-component-per-file': 'off',
    'vue/require-default-prop': 'off',
    'vue/no-unused-components': 'off',
    'vue/require-prop-types': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/no-v-text-v-html-on-component': 'off',
    'vue/no-use-v-if-with-v-for': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/no-v-model-argument': 'off',
    'vue/require-v-for-key': 'warn',
    'vue/valid-v-for': 'warn',
    'vue/no-reserved-component-names': 'off'
  }
}
