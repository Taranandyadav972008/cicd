module.exports = {
  env: {
    node: true,
    jest: true,
    es2021: true
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'no-console': 'off'  // or 'warn' if you want warnings instead of errors
  }
};