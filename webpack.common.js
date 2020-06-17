/**
 *  Webpack file. A bundler.
 *  @author Kevin Li
 */
const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const _publicDir = path.join(__dirname, "public");

module.exports = {
    entry: "./src/app.js",
    output: {
        path: _publicDir,
        filename: "bundle.js"
    },
    plugins: [
        new MiniCssExtractPlugin({
           filename: "styles.css"
        }),
    ],
    module: {
        rules: [
            { loader: "babel-loader", test: /\.js$/, exclude: /node_modules/ },
            {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: { sourceMap: true }
                    },
                    {
                        loader: "sass-loader",
                        options: { sourceMap: true }
                    }
                ]
            }
        ]
    }
};