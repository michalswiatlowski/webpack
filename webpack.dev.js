const path = require("path");
const common = require('./webpack.common');
const merge = require('webpack-merge');

module.exports = merge(common, {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      }
    ]
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "./dist")
  }
});
