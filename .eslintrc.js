module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    ['no-plusplus']: 0,
    ['linebreak-style']: 0,
    ['max-classes-per-file']: 0,
    ['no-param-reassign']: 0,
    ['arrow-parens']: 0,
  },
};
