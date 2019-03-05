module.exports = {
  env: {
    browser: true,
    es6: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 6
  },
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }]
  }
};
