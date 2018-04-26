/**
 * Created by dongjie on 23/4/18.
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


module.exports = {

        entry:{
            app:'./src/index.js'
        },

        module:{
            rules:[
                {
                    test: /\.(woff|woff2|eot|ttf|otf|svg|gif|jpeg|png)$/,
                    use: ['file-loader']
                },
                {
                    test: /\.(css|scss)$/,
                    use:['style-loader','css-loader']
                },
                {
                    test: /\.js$/,
                    exclude:/node_modules/,
                    use: {
                        loader:"babel-loader"
                    }
                }
            ]
        },

        plugins : [
            new HtmlWebpackPlugin({
                title:'TestNet',
                template:"index.html",
                filename:'index.html'
            }),

            new webpack.NamedModulesPlugin(),
            new webpack.HotModuleReplacementPlugin()
        ]

};