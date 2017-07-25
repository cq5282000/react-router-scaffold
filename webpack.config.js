/**
 * Created by chenqu on 2017/7/25.
 */
const path = require('path');
console.log(__dirname);
module.exports = {
    entry: './demo1/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'), //当前文件所在目录的根目录
        filename: 'bundle.js',
    },

    // plugins: [
    //     new webpack.LoaderOptionsPlugin({
    //         options: {
    //             moduel: {
    //                 loaders:[
    //                     {
    //                         test: /\.js[x]?$/,
    //                         exclude: /node_modules/,
    //                         loader: 'babel-loader?presets[]=es2015&presets[]=react'
    //                     },
    //                 ]
    //             },
    //         }
    //     })
    // ]

};