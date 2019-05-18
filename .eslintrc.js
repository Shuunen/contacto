module.exports = {
  'root': true,
  'env': {
    'node': true,
    'browser': true
  },
  'extends': [
    'plugin:compat/recommended',
    'plugin:vue/essential',
    'eslint:recommended',
    'standard'
  ],
  'parserOptions': {
    'parser': 'babel-eslint'
  },
  'rules': {
    'no-console': 'off'
  }
}
