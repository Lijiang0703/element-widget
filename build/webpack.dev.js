const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin= require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
    
    },
    output: {

    },
    module:{
        rules:[

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'./dev/index.webpack.html'),
            hash: true,
        })
    ],
    devServer: {
        contentBase: path.join(__dirname,'dist'),
        compress: true,
        port: 9090
    }
}