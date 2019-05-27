const rules = require('./.eslintrc.rules')

module.exports = {
  extends: [
    'plugin:compat/recommended',
    'plugin:vue/recommended',
    'eslint:recommended',
    'standard',
  ],
  rules,
  parserOptions: {
    parser: 'babel-eslint',
  },
}
