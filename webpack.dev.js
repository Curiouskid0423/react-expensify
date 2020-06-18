const merge = require("webpack-merge");
const common = require("./webpack.common");

const path = require("path");
const _publicDir = path.join(__dirname, "public");

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        historyApiFallback: true,
        contentBase: _publicDir,
        publicPath: "/dist/"
    },
});