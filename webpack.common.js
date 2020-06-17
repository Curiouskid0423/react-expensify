/**
 *  Webpack file. A bundler.
 *  @author Kevin Li
 */
const path = require("path");
const _publicDir = path.join(__dirname, "public");

module.exports = {
    entry: "./src/app.js",
    output: {
        path: _publicDir,
        filename: "bundle.js"
    },
    module: {
        rules: [
            { loader: "babel-loader", test: /\.js$/, exclude: /node_modules/ },
            { test: /\.s?css$/, use: ["style-loader", "css-loader", "sass-loader"] }
        ]
    }
};