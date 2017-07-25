/**
 * Created by chenqu on 2017/7/25.
 */
const path = require('path');
const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
module.exports = {
    entry: {
        app: './demo1/app.js',
        main: './demo1/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'), //__dirname指的是当前文件所在目录的根目录
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.txt$/,
                use: 'raw-loader'
            },

        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin({
            // Options...
        }),
        new OpenBrowserPlugin({
            // url:
        })
    ]

};