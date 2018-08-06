const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV || 'development',
    entry: {
        app: './src/app.js',
    },
    output: {
        filename: '[name].[hash].js',
        path: __dirname + '/public',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new HtmlPlugin(),
    ],
};
