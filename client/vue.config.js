module.exports = {
  devServer: {
    open: true,
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changOrigin: true,
        ws: true,
        pathRewrite: {
          "/api": ""
        }
      }
    }
  }
};
