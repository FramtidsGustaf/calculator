module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/calculator/' : '/',
  css: {
    loaderOptions: {
      sass: {
        prependData:
          '@import "~@/style/main.scss";'
      },
    }
  }
}