// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require('webpack');

module.exports = (() => {
  switch (process.env.NODE_ENV) {
    case 'future':
      return {
        outputDir: 'dist-future',
        publicPath: '/future/',
        configureWebpack: {
          plugins: [
            new webpack.DefinePlugin({
              STATIC_BASE: JSON.stringify('https://storage.googleapis.com/significatif/'),
              ROUTER_BASE: JSON.stringify('/future/'),
            }),
          ],
        },
      };
    case 'prod':
      return {
        outputDir: 'dist-prod',
        configureWebpack: {
          plugins: [
            new webpack.DefinePlugin({
              STATIC_BASE: JSON.stringify('https://storage.googleapis.com/significatif/'),
              ROUTER_BASE: JSON.stringify('/'),
            }),
          ],
        },
      };
    case 'dev':
      return {
        configureWebpack: {
          plugins: [
            new webpack.DefinePlugin({
              STATIC_BASE: JSON.stringify('http://localhost:8081/'),
              ROUTER_BASE: JSON.stringify('/'),
            }),
          ],
        },
      };
    default:
      throw new Error(`Unknown NODE_ENV "${process.env.NODE_ENV}"`);
  }
})();
