const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      filename: "./index.html",
      template: "./src/index.ejs",
    }),
    //new HtmlWebpackPlugin({
    // ここにaboutのパスを書く
    // aboutディレクトリを作成しそのディレクトリ内のindex.ejsに記述すること
    //}),
  ],
  module: {
    rules: [
      {
        test: /\.ejs$/,
        use: "ejs-compiled-loader",
      },
    ],
  },
  devServer: {
    compress: true,
    port: 9000,
  },
};
