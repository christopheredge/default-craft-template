const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
var atImport = require("postcss-import")

module.exports = {
  entry: './src/js/globals.js',
  output: {
    path: path.resolve(__dirname, 'web'),
    filename: 'base.js',
    publicPath: ""
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { importLoaders: 1 } },
            'postcss-loader'
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
        filename: "public/stylesheets/[name].[contenthash].bundle.min.css"
    }),
    new HtmlWebpackPlugin({
      template: './src/webpack.template/_webpack.template.wrapper.twig',
      filename: '../templates/_webpack.template/_webpack.template.wrapper.twig',
    }),
  ]
}
