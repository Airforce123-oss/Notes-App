const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,

  publicPath: process.env.NODE_ENV === "production" ? "/vue-note-app/" : "/",

  outputDir: "dist",

  assetsDir: "static",

  productionSourceMap: false,
});
