var webpack = require('webpack');
var HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: './src/main.ts',
    output: {
        path: __dirname + '/dist',
        filename: './app.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]

    },
    resolve: {
        extensions: ['.js','.ts']
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html'
        })
    ]
};