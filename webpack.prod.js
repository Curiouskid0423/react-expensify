const merge = require("webpack-merge");
const common = require("./webpack.common");

// Removed source map completely
// (previously devtool: 'source-map')
module.exports = merge(common, {
    mode: "production"
});