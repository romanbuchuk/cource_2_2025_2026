const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.config.js');

const devConfig = {
    "mode": "development",
    "output": {
        filename: "[name].js",
    }
};

module.exports = merge(commonConfig, devConfig);
