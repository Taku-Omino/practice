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
    new HtmlWebpackPlugin({
      filename: "./about.html",
      template: "./src/about.ejs",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ejs$/,
        loader: "ejs-compiled-loader",
        options: {
          htmlmin: true,
          htmlminOptions: {
            removeComments: true,
          },
          compiler: require("ejs"),
          compilerOptions: {
            client: true,
          },
        },
      },
    ],
  },
  devServer: {
    compress: true,
    port: 9000,
  },
};
