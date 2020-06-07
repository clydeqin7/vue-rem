// const pxtorem = require("postcss-pxtorem");
const px2rem = require("postcss-plugin-px2rem");

module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          // pxtorem({ // pxtorem配置
          //   rootValue: 100,
          //   unitPrecision: 5,
          //   propList: ['*'],
          //   selectorBlackList: [],
          //   replace: true,
          //   mediaQuery: false,
          //   minPixelValue: 0,
          //   exclude: /node_modules/i
        	// })
          px2rem({ // postcss-plugin-px2rem配置
            rootValue: 100,
            unitPrecision: 5,
            propWhiteList: [],
            propBlackList: [],
            exclude: false,
            selectorBlackList: [],
            ignoreIdentifier: false,
            replace: true,
            mediaQuery: false,
            minPixelValue: 0
          })
        ]
      }
    }
  }
};
