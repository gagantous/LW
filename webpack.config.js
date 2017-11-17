const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const paths = {
  PUBLIC: path.resolve(__dirname, 'public'),
  SRC: path.resolve(__dirname, 'src')
}

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(paths.SRC, 'index.html'),
  filename: 'index.html'
});

const config = {
  entry: path.join(paths.SRC, 'index.js'),
  output: {
    path: paths.DIST,
    filename: 'app.bundle.js'
  },
  devServer: {
    inline: true,
    port: 5555,
    hot: true,
    historyApiFallback: true,
    contentBase: paths.public
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { 
        test: /\.jsx$/, 
        loader: 'babel-loader', 
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" }, 
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      },
      { test: /\.(png|jpg|gif|svg)$/, loader: 'file-loader' },
      { test: /\.(woff|woff2|eot|otf|ttf)$/, loader: 'file-loader' }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
          'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    HtmlWebpackPluginConfig
  ]
}

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new UglifyJSPlugin()
  )
}

module.exports = config