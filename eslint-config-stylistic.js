'use strict';
const {lineIndent} = require('./utils');
// Stylistic Issues
module.exports = {
  extends: [
    'minxing/eslint-config-stylistic.js'
  ],
  rules: {
    indent: ['error', lineIndent, {
      SwitchCase: 0,
      VariableDeclarator: {
        var: 2,
        let: 2,
        const: 3
      }
    }]
  }
};
