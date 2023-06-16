const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const EslingPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        assetModuleFilename: path.join('images', '[name].[ext]'),
    },
    module: {
        rules: [
            { 
                test: /\.ts$/i, use: 'ts-loader' 
            },
            {
                test: /\.(scss|css)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.svg$/,
                type: 'asset/resource',
                generator: {
                filename: path.join('icons', '[name][ext]'),
                },
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
            filename: 'index.html',
          }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            }),
        new EslingPlugin({
             extensions: 'ts' 
            })
    ],
    devServer: {
        watchFiles: path.join(__dirname, 'src'),
        port: 9000,
    },
}