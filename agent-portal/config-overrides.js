/* config-overrides.js */

const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  fixBabelImports('import', {
    // libraryName: 'antd',
    // libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
    },
  }),
  addWebpackAlias({
    ['@app']: path.resolve(__dirname, 'src/app'),
    ['@assets']: path.resolve(__dirname, 'src/assets'),
    ['@constants']: path.resolve(__dirname, 'src/constants'),
    ['@layout']: path.resolve(__dirname, 'src/layout'),
    ['@reducers']: path.resolve(__dirname, 'src/reducers'),
    ['@routes']: path.resolve(__dirname, 'src/routes'),
    ['@store']: path.resolve(__dirname, 'src/store'),
    ['@styles']: path.resolve(__dirname, 'src/styles'),
    ['@utils']: path.resolve(__dirname, 'src/utils'),
  }),
);
