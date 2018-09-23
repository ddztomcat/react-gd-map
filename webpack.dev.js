const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
const projectConfig = require('./project-config.js');
module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        filename: '[name].js',
        chunkFilename: '[name].bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new OpenBrowserPlugin({ url: `http://localhost:${projectConfig.port}` })
    ],
});