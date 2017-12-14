/**
 * Created by chenqu on 2017/7/25.
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const PostcssImport = require('postcss-import');
const precss = require('precss');
const cssnext = require('postcss-cssnext');
const rd = require('rd');

const DIST = path.resolve(__dirname, 'dist');

let NODE_ENV = process.env.NODE_ENV || process.env.ENV || 'production';
// 注: product环境 process.env.ENV的值不是'production'而是'product'
if (NODE_ENV.toLowerCase() === 'product') {
    NODE_ENV = 'production';
}

let publicPathStr = '/entry/'; // 公共路径字符串
if (NODE_ENV !== 'development') {
    publicPathStr = '';
}

const entrySettingItem = (lastPortion) => {
    switch (NODE_ENV) {
        case 'development':
            return [
                'react-hot-loader/patch',
                'webpack-dev-server/client?http://localhost:8000/',
                'webpack/hot/dev-server',
                'babel-polyfill',
                `./src/entry/${lastPortion}.js`,
            ];
        default: // eslint-disable-line
            return [
                'babel-polyfill',
                `./src/entry/${lastPortion}.js`,
            ];
    }
};

const entry = {};
let plugins = [];

const SRC = path.resolve(process.cwd(), 'src');
const ENTRY = path.resolve(SRC, 'entry');
rd.eachFileFilterSync(ENTRY, /\.js$/, (file) => {
    const lastPortion = path.basename(file, '.js').toLowerCase();
    entry[lastPortion] = entrySettingItem(lastPortion);
    const htmlWebpackPluginItem = new HtmlWebpackPlugin({
        filename: `${lastPortion}.html`, // 生成文件位置
        template: 'src/template/index.html', // 模版文件位置
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
    default:
        plugins = [...plugins, new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(NODE_ENV),
            },
        })];
        break;
}

let webpackConfig = {
    entry: {},
    output: {
        path: path.resolve(__dirname, 'dist'), // __dirname指的是当前文件所在目录的根目录
        filename: '[name].js',
        publicPath: publicPathStr,
        // publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader',
                ],
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader',
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
        // 模块热加载
        new CleanWebpackPlugin([DIST]),
    ],
    devServer: {
        hot: true, // 告诉 dev-server 我们在使用 HMR
        contentBase: path.resolve(__dirname, 'node_modules'),
        inline: true,
        historyApiFallback: true,
        stats: 'normal',
        publicPath: publicPathStr,
        host: '0.0.0.0',
        port: 8000,
    },
};

switch (NODE_ENV) {
    case 'development':
        plugins = [new webpack.HotModuleReplacementPlugin(), ...plugins];
        break;
    default: // eslint-disable-line
        break;
}

webpackConfig = Object.assign(webpackConfig, { entry, plugins });
module.exports = webpackConfig;
