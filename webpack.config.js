/**
 * Created by chenqu on 2017/7/25.
 */
const path = require('path');
const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: './src/app.js',
        main: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'), //__dirname指的是当前文件所在目录的根目录
        filename: '[name].js',
    },
    module: {
        rules: [
            /* 处理.txt文件*/
            {
                test: /\.txt$/,
                use: 'raw-loader'
            },
            /* 处理CSS文件 */
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            /*处理图片文件*/
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            /*处理字体文件*/
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            /*c处理CSV和TSV文件*/
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            /*处理XML*/
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }

        ]
    },
    devtool: 'inline-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin({  //模块热加载
            // Options...
        }),
        new OpenBrowserPlugin({  //启动时打开浏览器
            // url:
        }),
        new HtmlWebpackPlugin({              //自动绑定bundle文件到模版文件上
            title: 'Output Management',
            filename: 'entry/index.html',    //生成文件位置
            template: 'entry/index.html'    //模版文件位置
        }),
        new CleanWebpackPlugin(['dist']), //清理dist文件
    ]

};