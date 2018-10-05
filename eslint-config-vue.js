'use strict';
const {lineIndent} = require('./utils');
module.exports = {
  extends: [
    'minxing/eslint-config-vue.js'
  ],
  rules: {
    'vue/html-indent': ['error', lineIndent]
  }
};
