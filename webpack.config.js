const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ZipWebpackPlugin = require('./tools/ZipWebpackPlugin');
const webpack = require('webpack');
const moment = require('moment');
const config = require('./.roadhogrc.js');

const buildTime = moment().format('YYYYMMDDHHmmSS');

module.exports = (webpackConfig, env) => {
    console.log(`您当前处于${env}环境`);
    // 判断是否在构建
    const isBuild = env !== 'development';
    const nowEnv = env === 'production' ? 'prd' : 'stg';
    const folderName = config.folderName;
    if (webpackConfig.module) {
        webpackConfig.module.rules.push(
            {
                test: /\.(js|jsx)$/,
                loader: 'eslint',
                enforce: 'pre',
                include: `${__dirname}/src`,
                options: {
                    formatter: require('eslint-friendly-formatter'),
                },
            },
        );
    }
    if (isBuild) {
        // 覆盖路霸默认打包默认js路径
        webpackConfig.output.filename = 'static/js/[name].[chunkhash:8].js';
        webpackConfig.output.chunkFilename = 'static/js/[name].[chunkhash:8].js';
        if (webpackConfig.module) {
            webpackConfig.module.rules.forEach((item) => {
                if (item.loader === 'url') {
                    item.options = {
                        limit: 10000,
                        name: 'static/images/[name].[hash:8].[ext]'
                    };
                }
            });
        }
        webpackConfig.plugins.push(
            new webpack.LoaderOptionsPlugin({
                minimize: true,
                debug: false,
            }),
            // 清理上次构建文件
            new CleanWebpackPlugin([nowEnv], {
                root: `${__dirname}/dist/`,
            }),
            // 打zip包
            new ZipWebpackPlugin({
                outpath: `${__dirname}/dist/${nowEnv}`,
                pathPrefix: './',
                filename: `${folderName}_${buildTime}`,
            }),
        );
    }

    webpackConfig.plugins = webpackConfig.plugins.concat([
        // 复制文件
        new CopyWebpackPlugin([
            {
                from: `${__dirname}/src/assets/html`,
                to: 'static/html',
            },
        ]),
    ]);
    webpackConfig.resolve.alias = {
        flexible: `${__dirname}/src/assets/lib/flexible.js`, // 淘宝自适应框架
    };
    // 覆盖原有webpack插件属性
    webpackConfig.plugins.forEach((item) => {
        if (item.constructor.name === 'ExtractTextPlugin') {
            item.filename = 'static/css/[name].[contenthash:8].css';
        } else if (item.constructor.name === 'HtmlWebpackPlugin') {
            item.options.minify = {
                collapseWhitespace: true,
                removeComments: true,
                removeAttributeQuotes: true,
            };
        }
    });
    return webpackConfig;
};
