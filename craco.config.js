module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Use eval-source-map for development to avoid CSP issues
      if (process.env.NODE_ENV === 'development') {
        webpackConfig.devtool = 'eval-source-map';
      }
      
      return webpackConfig;
    },
  }
}; 