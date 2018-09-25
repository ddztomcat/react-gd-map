const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
    mode: devMode ? 'development' : 'production',
    entry: {
        app: ["babel-polyfill", './src/browser.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist/public'),
        publicPath: '/public/',
        filename: '[name].js',
        chunkFilename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.js(x)?$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
            },
            {
                test: /\.js(x)*$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /^(.*?)\.(global)\.(sa|sc|c)ss$/,//xxx.global.
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /^((?!global).)*\.(sa|sc|c)ss$/,
                // exclude: /node_modules/,
                // include: path.join(__dirname, '/node_modules/antd'),
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader?modules&localIdentName=[name]-[hash:base64:5]',
                    'postcss-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'react 全家桶',
            template: 'src/index.html'
        }),
        new webpack.HashedModuleIdsPlugin(),
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[contenthash].css'
        }),
        new CleanWebpackPlugin(['dist']),
    ],
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                    priority: 10
                },
                // styles: {
                //     name: 'styles',
                //     test: /\.(sa|sc|c)ss$/,
                //     chunks: 'all',
                //     enforce: true
                // }
            },
        }
    },
    resolve: {
        extensions: [".js", ".jsx", ".scss", ".css"], //后缀名自动补全
        alias: {
            '@': path.resolve(__dirname, "src")
        }
    }
};