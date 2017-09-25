/**
 * Created by chenqu on 2017/7/25.
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: [
            './src/app.js',
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'), // __dirname指的是当前文件所在目录的根目录
        filename: '[name].js',
        publicPath: '/entry/',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },
            {
                test: /\.jsx?$/,
                use: ['babel-loader'],
                include: path.resolve(__dirname, 'src'),
            },
            {
                test: /\.jsx$/,
                use: [
                    {
                        loader: 'react-hot-loader',
                    },

                ],
            },
        ],
    },
    devtool: 'inline-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            },
        }),
        new webpack.HotModuleReplacementPlugin(), // 模块热加载
        new HtmlWebpackPlugin({              // 自动绑定bundle文件到模版文件上
            title: 'Output Management',
            filename: 'html/index.html',    // 生成文件位置
            template: 'template/index.html',    // 模版文件位置
        }),
    ],
};
