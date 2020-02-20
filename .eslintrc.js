module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'indent': [ 'error', 'tab', { 'SwitchCase': 1 } ],
    'no-tabs': 'off',
    'nuxt/no-cjs-in-config': 'off',
    'vue/no-v-html': 'off',

  }
}
