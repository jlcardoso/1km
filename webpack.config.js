const path = require('path');
const Dotenv = require('dotenv-webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    resolve: {
        modules: ['node_modules'],
        alias: {
            shared: path.resolve(__dirname, 'shared')
        }
    },
    devServer: {
        contentBase: './dist',
    },
    devtool: 'eval-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
    },
    plugins: [
        new Dotenv(),
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
        ],
    },
};