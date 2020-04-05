const path = require("path");

const babelLoader = {
  loader: "babel-loader",
  options: {
    cacheDirectory: true,
  },
};

const tsLoader = {
  loader: "ts-loader",
};

module.exports = {
  entry: "./src/index.tsx",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        include: path.resolve(__dirname, "../src"),
        use: [babelLoader, tsLoader],
      },
      {
        test: /\.(js)$/,
        include: path.resolve(__dirname, "../src"),
        use: babelLoader,
      },
    ],
  },
  mode: "development",
};
