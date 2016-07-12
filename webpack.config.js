var path = require('path');
var webpack = require('webpack');
var AureliaWebpackPlugin = require('aurelia-webpack-plugin');

module.exports = {
    devServer: {
        host: 'localhost',
        port: 2048
    },
    devtool: "eval",
    entry: {
        main: [
            './src/main'
        ]
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    plugins: [
        new AureliaWebpackPlugin()
    ],
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/, query: {stage: 0} }, 
            { test: /\.css?$/, loader: 'style!css' }, 
            { test: /\.html$/, loader: 'raw' },
        ]
    }
};
