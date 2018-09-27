const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
    mode: devMode ? 'development' : 'production',
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
                test: /^((?!global).)*\.(sa|sc|c)ss$/,// 匹配不带global的 && !/node_modules/
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader?modules&localIdentName=[name]-[hash:base64:5]',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /^(.*?)(\.(global))\.(sa|sc|c)ss$/,// 匹配带global的 && !/node_modules/
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(sa|sc|c)ss$/,// 匹配不带global的 && /node_modules/
                include: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    'url-loader?limit=8192&name=[name].[ext]&outputPath=images/'
                ]
            }
        ]
    },
    plugins: [
        new webpack.HashedModuleIdsPlugin(),
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[contenthash].css'
        })
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