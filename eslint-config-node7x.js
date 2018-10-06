'use strict';
const {lineIndent} = require('./utils');
module.exports = {
  extends: [
    'minxing/eslint-config-node7x.js'
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
