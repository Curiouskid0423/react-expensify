/**
 *  Webpack file. A bundler.
 *  @author Kevin Li
 * 1. Output path has to be ABSOLUTE path.
 * 2. Dev-server does not explicitly create a bundle.js file.
 * 3. Inside /modules/rules, we use "loader" for one loader, and "use"
 *    if there is multiple.
 */
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
            { loader: "babel-loader", test: /\.js$/, exclude: /node_modules/ },
            { test: /\.css$/, use: ["style-loader", "css-loader"] }
        ]
    },
    devtool: "eval-cheap-module-source-map",
    devServer: {
        contentBase: _publicDir
    }
};