const webpack = require('webpack');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const PRODUCTION = process.env.NODE_ENV === 'production';
// const DEVELOPMENT = process.env.NODE_ENV === 'development';

const extractSass = new ExtractTextPlugin({
  filename: 'styles-[hash:8].min.css',
  disable: process.env.NODE_ENV !== 'production'
});

const plugins = PRODUCTION
  ? [
    new CleanWebpackPlugin(['dist'], {
      root: __dirname,
      verbose: true,
      dry: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
      output: {
        comments: false,
      },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   minChunks: Infinity,
    //   filename: PRODUCTION ? 'vendor-[hash:8].bundle.min.js' : 'vendor.bundle.js'
    // }),
    new HTMLWebpackPlugin({
      template: './src/index-template.html',
      filename: 'index.html'
    })
  ]
  : [
    new CleanWebpackPlugin(['dist'], {
      root: __dirname,
      verbose: true,
      dry: false
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   minChunks: Infinity,
    //   filename: PRODUCTION ? 'vendor-[hash:8].bundle.min.js' : 'vendor.bundle.js'
    // }),
    new HTMLWebpackPlugin({
      template: './src/index-template.html',
      filename: 'index.html'
    })
  ];

plugins.push(extractSass);


module.exports = {
  devtool: PRODUCTION ? '' : 'source-map',
  entry: {
    js: './src/index.js',
    // vendor: ['react']
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: PRODUCTION ? '[name]-[hash:8].bundle.min.js' : '[name].bundle.js'
  },
  plugins,
  module: {
    rules: [
      {
        test: /\.ejs$/,
        loader: 'ejs-loader'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader?name=/images/[name].[ext]'
      },
      {
        test: /\.scss$/,
        loader: extractSass.extract({
          use: [{
            loader: 'css-loader', options: { minimize: PRODUCTION, sourceMap: !PRODUCTION }
          }, {
            loader: 'postcss-loader',
            options: {
              plugins() {
                return [
                  autoprefixer
                ];
              }
            }
          },
          {
            loader: 'sass-loader'
          }],
          fallback: 'style-loader'
        })
      },
    ]
  }
};
