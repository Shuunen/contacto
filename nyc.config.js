module.exports = {
  reporter: ['text', 'lcovonly'],
  exclude: ['**/index.js', 'tests/**'],
  'check-coverage': true,
  branches: 90,
  functions: 90,
  lines: 90,
  statements: 90,
}
