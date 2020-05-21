//1. Output path has to be ABSOLUTE path.
//2. Dev-server does not explicitly create a bundle.js file.
const path = require("path");
const _publicDir = path.join(__dirname, "public");

module.exports = {
    mode: "development",
    entry: "./src/app.js",
    output: {
        path: _publicDir,
        filename: "bundle.js"
    },
    module: {
        rules: [
            { loader: "babel-loader", test: /\.js$/, exclude: /node_modules/ }
        ]
    },
    devtool: "eval-cheap-module-source-map",
    devServer: {
        contentBase: _publicDir
    }
};