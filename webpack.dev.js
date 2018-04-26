/**
 * Created by dongjie on 23/4/18.
 */

const merge = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');


module.exports = merge(common, {
    devtool : 'inline-source-map',

    output: {
        filename: '[name].bundle.js?' + Date.now(),
        path: path.resolve(__dirname, 'dist/dev')
    },

    devServer:{
        contentBase:'./dist/dev',
        hot:true
    },

    plugins : [
        new CleanWebpackPlugin(['dist/dev']),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
    ]
})
