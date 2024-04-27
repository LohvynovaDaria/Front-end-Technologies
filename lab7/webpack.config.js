const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'out.bundle.js',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Важлива інформація',
            template: path.resolve(__dirname, './src/pages/index.html'),
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            title: 'Інтереси',
            template: path.resolve(__dirname, './src/pages/about.html'),
            filename: 'about.html',
        }),
        new HtmlWebpackPlugin({
            title: 'Інтереси',
            template: path.resolve(__dirname, './src/pages/rozklad.html'),
            filename: 'rozklad.html',
        }),
        new HtmlWebpackPlugin({
            title: 'Інтереси',
            template: path.resolve(__dirname, './src/pages/photo.html'),
            filename: 'photo.html',
        }),
        new HtmlWebpackPlugin({
            title: 'Інтереси',
            template: path.resolve(__dirname, './src/pages/news.html'),
            filename: 'news.html',
        }),
        new CopyPlugin({
            patterns: [
                {from: "./src/assets/images", to: "./assets/"}
            ]
        }),
        new MiniCssExtractPlugin(/*{
            filename: process.env.STYLE_FILE
        }*/)
    ],
    module: {
        rules: [
            {
                test: /\.(css|scss|sass)$/,
                use: [MiniCssExtractPlugin.loader, "style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, "style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.styl$/,
                use: [/*MiniCssExtractPlugin.loader, */"style-loader", "css-loader", "stylus-loader"],
            }
        ],
    },
}