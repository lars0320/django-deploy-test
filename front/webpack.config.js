var path = require('path');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
  context: __dirname,
  mode: 'development',
  entry: {
    'Index': "./src/Index.js",
    'Rulet': "./src/Rulet.js",
    'HighAndLow': "./src/HighAndLow.js",
    'Counter': "./src/Counter.js",
    'Test': "./src/Test.js",
  },
  output: {
    path: __dirname + '/../static/',
    filename: '[name].js',
    publicPath: 'js/'
  },
  resolve: {
    modules: [__dirname + '/src/', 'node_modules'],
    extensions: ['.js', '.jsx', '.less']
  },
  plugins: [
    new BundleTracker({
      path: __dirname,
      filename: 'webpack-stats.json'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
            },
          },
        ],
      },
      {
        test: /\.(jpg|jpeg|gif|png)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            publicPath: 'images',
            outputPath: 'images',
          }
        }
      },
      {
        test: /\.(sass|less|css)$/,
        loaders: ['style-loader', 'css-loader', 'less-loader']
      }
    ],
  },
}

















/*const HtmlWebpackPlugin = require('html-webpack-plugin');
const port = process.env.PORT || 3000;

module.exports = {
  mode: 'development',
  entry: {
    'index': "./src/index",
  },
  
  output: {
    path: __dirname + '/../static/',
    filename: '[name].js',
    publicPath: 'js/'
  },  
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
            },
          },
        ],
      },
      {
        test: /\.(jpg|jpeg|gif|png)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            publicPath: 'images',
            outputPath: 'images',
          }
        }
      },
      {
        test: /\.(sass|less|css)$/,
        loaders: ['style-loader', 'css-loader', 'less-loader']
      }
    ],
  },
  resolve: {
    modules: [__dirname + '/src/', 'node_modules'],
    extensions: ['.js', '.jsx', '.less']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/tem/index.html',
    }),
  ],
  devServer: {
    host: 'localhost',
    port: port,
    open: true,
  }
};
*/
