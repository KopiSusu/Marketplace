var webpack = require('webpack');

module.exports = {
  entry: [
    './js/public/view-web/root.js'
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'react-hot-loader/webpack!babel'
      },
      { 
        test: /\.(png|jpg)$/,
        loader: 'file-loader?name=images/[name].[ext]' 
      },
      {   
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, 
        loader: 'file-loader?name=fonts/[name].[ext]' 
      },
      {
        test: /\.css$/,
        loader: 'style!css!autoprefixer?browsers=last 2 versions'
      },
      {   
        test: /\.styl$/, 
        loader: 'style!css!stylus-loader' 
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: __dirname + '/dist',
    historyApiFallback: true,
    hot: true
  },
  plugins: []
};