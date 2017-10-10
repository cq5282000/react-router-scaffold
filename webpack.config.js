/**
 * Created by chenqu on 2017/7/25.
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PostcssImport = require('postcss-import');
const precss = require('precss');
const cssnext = require('postcss-cssnext');
const rd = require('rd');

let NODE_ENV = process.env.NODE_ENV || process.env.ENV || 'production';
// 注: product环境 process.env.ENV的值不是'production'而是'product'
if (NODE_ENV.toLowerCase() === 'product') {
    NODE_ENV = 'production';
}

const entrySettingItem = (lastPortion) => [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080/',
    'webpack/hot/dev-server',
    'babel-polyfill',
    `./src/entry/${lastPortion}.js`,
];

const entry = {};
let plugins = [];

const SRC = path.resolve(process.cwd(), 'src');
const ENTRY = path.resolve(SRC, 'entry');
rd.eachFileFilterSync(ENTRY, /\.js$/, (file) => {
    const lastPortion = path.basename(file, '.js').toLowerCase();
    entry[lastPortion] = entrySettingItem(lastPortion);
    const htmlWebpackPluginItem = new HtmlWebpackPlugin({
        filename: `html/${lastPortion}.html`, // 生成文件位置
        template: 'template/index.html', // 模版文件位置
        chunks: [lastPortion], // 绑定对应打包的JS文件
    });
    plugins = [...plugins, htmlWebpackPluginItem];
});

switch (NODE_ENV) {
    case 'development':
        plugins = [...plugins, new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
            },
        })];
        break;
    case 'production':
        plugins = [...plugins, new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            },
        })];
        break;
    default:
        break;
}

let webpackConfig = {
    entry: {
        // app: [
        //     'react-hot-loader/patch',
        //     'webpack-dev-server/client?http://localhost:8080/',
        //     'webpack/hot/dev-server',
        //     './src/entry/app.js',
        // ],
        // com: [
        //     'react-hot-loader/patch',
        //     'webpack-dev-server/client?http://localhost:8080/',
        //     'webpack/hot/dev-server',
        //     './src/entry/com.js',
        // ],
        // detail: [
        //     'react-hot-loader/patch',
        //     'webpack-dev-server/client?http://localhost:8080/',
        //     'webpack/hot/dev-server',
        //     './src/entry/detail.js',
        // ],
        // list: [
        //     'react-hot-loader/patch',
        //     'webpack-dev-server/client?http://localhost:8080/',
        //     'webpack/hot/dev-server',
        //     './src/entry/list.js',
        // ],
        // form: [
        //     'react-hot-loader/patch',
        //     'webpack-dev-server/client?http://localhost:8080/',
        //     'webpack/hot/dev-server',
        //     './src/entry/form.js',
        // ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'), // __dirname指的是当前文件所在目录的根目录
        filename: '[name].js',
        publicPath: '/entry/',
        // publicPath: '/',
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
            {
                test: /\.pcss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: () => {
                                return [
                                    PostcssImport(),
                                    precss,
                                    cssnext,
                                ];
                            },
                        },
                    },
                ],
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                include: [
                    path.resolve(path.join(__dirname, './'), 'src'),
                ],
                use: 'eslint-loader',
            },
        ],
    },
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         NODE_ENV: JSON.stringify('production'),
        //     },
        // }),
        new webpack.HotModuleReplacementPlugin(), // 模块热加载
        // new HtmlWebpackPlugin({              // 自动绑定bundle文件到模版文件上
        //     title: 'Output Management',
        //     filename: 'html/index.html',    // 生成文件位置
        //     template: 'template/index.html',    // 模版文件位置
        //     chunks: [
        //         'app',
        //     ],
        // }),
        // new HtmlWebpackPlugin({              // 自动绑定bundle文件到模版文件上
        //     title: 'Management',
        //     filename: 'html/index.html',    // 生成文件位置
        //     template: 'template/index.html',    // 模版文件位置
        //     chunks: [
        //         'com',
        //     ],
        // }),
    ],
    devServer: {
        hot: true, // 告诉 dev-server 我们在使用 HMR
        // contentBase: path.resolve(__dirname, 'src'),
        inline: true,
        // historyApiFallback: true,
        stats: 'normal',
        // publicPath: '/',
        publicPath: '/entry/',
        host: '127.0.0.1',
        port: 8080,
    },
};
plugins = [...plugins, webpackConfig.plugins[0]];
webpackConfig = Object.assign(webpackConfig, { entry, plugins });

module.exports = webpackConfig;
