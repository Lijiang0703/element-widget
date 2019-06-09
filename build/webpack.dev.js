const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin= require('html-webpack-plugin');

module.exports = {
    mode: "development",
    devtool: 'inline-source-map',
    entry: {
        index: path.resolve(__dirname,'../src/util/index'),
        // test: path.resolve(__dirname,'../test/index')
    },
    output: {
        filename: "index.bundle.js",
        path: path.resolve(__dirname,'../dist'),
        library: "elementWidget",
        libraryTarget: "umd",
        libraryExport: "default"
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                loader: ['babel-loader'],
                exclude:[
                    path.resolve(__dirname, "../node_modules")
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader'
            },
            {
                test: /\.css$/,
                loader: ['style-loader','css-loader']
            }
        ]
    },
    // optimization:{
    //     splitChunks:{
    //         chunks: 'test'
    //     }
    // },
    resolve:{
        extensions: ['.js','.vue']
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            // chunks: ['index','test'],
            template: path.resolve(__dirname,'../test/index.html'),
            hash: true,
            inject:  'head'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname,'dist'),
        compress: true,
        port: 9090
    }
}