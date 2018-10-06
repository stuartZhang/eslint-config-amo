# eslint-config-stzhang

【H5程序】与【node程序】`JavaScript`开发规则定制套装，支持`Vue`。

## 安装

`npm i eslint-config-stzhang -D`

### `peers`依赖

* eslint: 5.6+

## 配置

假设`vue-cli`脚手架被用来生成的【H5程序】的基本工程目录结构。

### 项目根目录下的`.eslintrc.js`配置

> 针对`webpack`可编程配置的`node`程序。

```javascript
module.exports = {
  ...
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaVersion': 5,
    'sourceType': 'module',
    'ecmaFeatures': {
      'globalReturn': true,
      'impliedStrict': false,
      'jsx': false,
      'experimentalObjectRestSpread': false
    }
  },
  'extends': [
    'eslint:recommended',
    'stzhang/eslint-config-bestpractice.js',
    'stzhang/eslint-config-errors.js',
    'stzhang/eslint-config-es6.js',
    'stzhang/eslint-config-node.js',
    'stzhang/eslint-config-possibleerrors.js',
    'stzhang/eslint-config-stylistic.js',
    'stzhang/eslint-config-var.js'
  ],
  ...
};
```

### `src`目录下的`.eslintrc.js`配置

> 重点针对`*.vue`程序。

```javascript
module.exports = {
  ...
  'root': true,
  'extends': [
    'eslint:recommended',
    'stzhang/eslint-config-vue.js',
    'stzhang/eslint-config-bestpractice.js',
    'stzhang/eslint-config-errors.js',
    'stzhang/eslint-config-es6.js',
    'stzhang/eslint-config-node.js',
    'stzhang/eslint-config-possibleerrors.js',
    'stzhang/eslint-config-stylistic.js',
    'stzhang/eslint-config-var.js'
  ],
  ...
};
```

## 手动执行`eslint`

`npm i npx -g`

`npx eslint **/*.* --fix`
