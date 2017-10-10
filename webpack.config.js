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
// const HappyPack = require('happypack');

const entrySettingItem = (lastPortion) => [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080/',
    'webpack/hot/dev-server',
    `./src/entry/${lastPortion}.js`,
];

const entry = {};
let plugins = [];
entry.vendor = [
    'babel-polyfill',
    'react',
    'react-dom',
    'react-router',
    'react-hot-loader',
    'antd',
    // 'redux',
    // 'react-redux',
    // 'react-router-redux',
];

const SRC = path.resolve(process.cwd(), 'src');
const ENTRY = path.resolve(SRC, 'entry');
rd.eachFileFilterSync(ENTRY, /\.js$/, (file) => {
    const lastPortion = path.basename(file, '.js').toLowerCase();
    entry[lastPortion] = entrySettingItem(lastPortion);
    const htmlWebpackPluginItem = new HtmlWebpackPlugin({
        filename: `html/${lastPortion}.html`, // 生成文件位置
        template: 'template/index.html', // 模版文件位置
        // chunks: [lastPortion], // 绑定对应打包的JS文件
        /* 使用commonchunkPlugin的话注销此段代码 */
        chunks: ['vendor', lastPortion], // 绑定对应打包的JS文件
    });
    plugins = [...plugins, htmlWebpackPluginItem];
});

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
        // chunkFilename: 'js/[name].[hash].js',
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
            // {
            //     test: /.js$/,
            //     loaders: ['happypack/loader'],
            //     // include: path,
            //     exclude: /node_modules/,
            // },
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
    devtool: 'eval',
    plugins: [
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         NODE_ENV: JSON.stringify('production'),
        //     },
        // }),
        new webpack.HotModuleReplacementPlugin(), // 模块热加载
        /* 使用happy的话注销此段代码 */
        // new HappyPack({
        //     // loaders is the only required parameter:
        //     loaders: ['babel-loader'],
        //     // customize as needed, see Configuration below
        //     // threadPool: happyThreadPool
        // }),
         /* 使用commonchunkPlugin的话注销此段代码 */
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'chunk/vendor.js',
            // (Give the chunk a different name)

            minChunks: 3,
            // (with more entries, this ensures that no other module
            //  goes into the vendor chunk)
        }),
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
plugins = [...plugins, ...webpackConfig.plugins];
webpackConfig = Object.assign(webpackConfig, { entry, plugins });

module.exports = webpackConfig;
