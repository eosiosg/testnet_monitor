/**
 * Created by dongjie on 23/4/18.
 */

const merge = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const SshWebpackPlugin = require('ssh-webpack-plugin');



module.exports = merge(common, {

    output: {
        filename: '[name].bundle.js?' + Date.now(),
        path: path.resolve(__dirname, 'dist/test')
    },

    plugins : [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('test')
        }),
        new CleanWebpackPlugin(['dist/test']),
    ]

})
