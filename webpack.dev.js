const merge = require("webpack-merge");
const common = require("./webpack.common");

const path = require("path");
const _publicDir = path.join(__dirname, "public");

module.exports = merge(common, {
    mode: "production",
    devtool: "eval-cheap-module-source-map",
    devServer: {
        historyApiFallback: true,
        contentBase: _publicDir,
    },
});