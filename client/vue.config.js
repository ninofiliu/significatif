module.exports = (() => {
  switch (process.env.NODE_ENV) {
    case 'future':
      return {
        outputDir: 'dist-future',
        publicPath: '/future/',
      };
    case 'prod':
      return {
        outputDir: 'dist-prod',
      };
    case 'dev':
      return {};
    default:
      throw new Error(`Unknown NODE_ENV "${process.env.NODE_ENV}"`);
  }
})();
