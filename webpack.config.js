var HtmlWebpackPlugin=require('html-webpack-plugin');
var path = require('path')
var {CleanWebpackPlugin}= require('clean-webpack-plugin')
var UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry:'./src/main',
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'[name].[contenthash:5].js'
    },
    module:{
        rules:[
        {
            test:/\.js$/,
            use:'babel-loader',
            exclude: /node_modules/,
        }]
    },
    optimization: {
        splitChunks: {
            chunks: "all", 
        },
        runtimeChunk:{
            name:'manifest'
        }
    },
    mode:'development',
    devtool:'source-map',
    devServer:{
        port:10000
        },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:'./index.html',
            filename: 'index.html'
        }),
        new BundleAnalyzerPlugin()
    ]
}