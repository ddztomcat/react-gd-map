const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var EventHooksPlugin = require('event-hooks-webpack-plugin');
var nodemon = require("nodemon");
const devMode = process.env.NODE_ENV !== 'production'
console.log(devMode,'$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$')
let running = false;
module.exports = {
    mode: devMode ? 'development' : 'production',
    target: 'node',
    entry: {
        app: ["babel-polyfill", './src/server.js']
    },
    output: {
        path: path.resolve(__dirname, 'ssr-dist'),
        publicPath: '/',
        filename: 'server.js',
        chunkFilename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.js(x)$/,
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
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
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
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader?modules&localIdentName=[name]-[hash:base64:5]',
                    'postcss-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.HashedModuleIdsPlugin(),
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[contenthash].css'
        }),
        new EventHooksPlugin({
            'done': () => {
                if(!running) {
                    running = true;
                     process.chdir(path.join(__dirname, "./ssr-dist"));
                        console.log('nodemon start...')
                        nodemon({
                            script: 'server.js',
                            delay: 2 * 1000,
                            ignore: ["public/*", "logs/*"]
                        });
                }
                       
            }
        })
    ],
    // optimization: {
    //     // runtimeChunk: 'single',
    //     splitChunks: {
    //         cacheGroups: {
    //             vendor: {
    //                 test: /[\\/]node_modules[\\/]/,
    //                 name: 'vendors',
    //                 chunks: 'all',
    //                 priority: 10
    //             },
    //             // styles: {
    //             //     name: 'styles',
    //             //     test: /\.(sa|sc|c)ss$/,
    //             //     chunks: 'all',
    //             //     enforce: true
    //             // }
    //         },
    //     }
    // },
    resolve: {
        extensions: [".js", ".jsx", ".scss", ".css"], //后缀名自动补全
        alias: {
            '@': path.resolve(__dirname, "src")
        }
    }
};