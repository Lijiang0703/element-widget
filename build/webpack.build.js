const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: "production",
    entry: {
        index: path.resolve(__dirname,'../package/index')
    },
    output: {
        filename: "element-widget.js",
        path: path.resolve(__dirname,'../lib'),
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
    resolve:{
        extensions: ['.js','.vue']
    },
    externals: {
        vue: 'Vue',
        element: 'element-ui'
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}