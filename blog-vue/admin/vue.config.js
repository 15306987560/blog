module.exports = {
  productionSourceMap: false,
  devServer: {
    proxy: {
      "/api": {
        target: "http://43.143.129.102:8080",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    },
    disableHostCheck: true
  },
  chainWebpack: config => {
    config.resolve.alias.set("@", resolve("src"));
  }
};

const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
