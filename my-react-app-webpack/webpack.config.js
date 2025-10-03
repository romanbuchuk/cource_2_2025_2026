const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    "entry": "./src/index.js",
    "output": {
        "path": __dirname + "/dist",
        "clean": true,
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader'
            }],
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './src/template/index.html'),
    })],
}