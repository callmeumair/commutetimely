module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Disable source maps in development to avoid eval issues
      if (process.env.NODE_ENV === 'development') {
        webpackConfig.devtool = 'cheap-module-source-map';
      }
      
      return webpackConfig;
    },
  },
  devServer: {
    headers: {
      'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https:; frame-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'"
    }
  }
}; 