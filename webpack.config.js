const { CheckerPlugin } = require("awesome-typescript-loader");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const path = require("path");
const glob = require("glob");
const fs = require("fs");

const ENTRY_REG = path.join(__dirname, "./src/*/**/index.ts");

let entries = {}; //多入口

glob.sync(ENTRY_REG).forEach((entry) => {
  const catalogue = path.dirname(entry); // util/valid/index.ts => util/valid
  const fileName = catalogue.split("/").pop(); // util/valid => valid
  entries[fileName] = entry;
});

glob.sync(ENTRY_REG).forEach((item) => console.log(item));
const WEBPACK_CONFIG = {
  mode: "production",
  entry: {
    ...entries, // 单独入口
  },
  output: {
    path: path.resolve(__dirname, "./lib"),
    filename: "[name]/index.js",
    publicPath: "/",
    libraryTarget: "umd", // 兼容es和node
    umdNamedDefine: true,
    globalObject: "this",
  },
  // Currently we need to add '.ts' to the resolve.extensions array.
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        // use:['awesome-typescript-loader']
        // 1.该 Loader 是把 TypeScript 转换成 JavaScript, 只负责新语法的转换，新增的API不会自动添加polyfill
        loader: "awesome-typescript-loader",
      },
    ],
  },

  plugins: [new CheckerPlugin()],

  // 压缩
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: false,
          mangle: true,
          output: {
            comments: false,
          },
        },
        sourceMap: false,
      }),
    ],
  },
  devtool: "hidden-source-map",
};

module.exports = WEBPACK_CONFIG;
