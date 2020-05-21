//output path has to be ABSOLUTE path.
const path = require("path");
const publicDir = path.join(__dirname, "public");

module.exports = {
    mode: "development",
    entry: "./src/app.js",
    output: {
        path: publicDir,
        filename: "bundle.js"
    },
    module: {
        rules: [
            { loader: "babel-loader", test: /\.js$/, exclude: /node_modules/ }
        ]
    },
    devtool: "eval-cheap-module-source-map",
    devServer: {
        contentBase: publicDir
    }
};