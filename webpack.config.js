var path = require('path')
var getEntrySources = function(sources) {
  sources.push('webpack-hot-middleware/client?reload=true')
  return sources
}

module.exports = {
  devtool: 'eval',
  entry: {
    'js/index': getEntrySources(['./client/js/index.js'])
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, './dist'),
    publicPath: '/'
  },
  devServer: {
    watchOptions: {
      poll: true
    }
  },
  module: {
    rules:[
      {
        test: /\.sass$/,
        use: [
          'style-loader',
          'css-loader?-sourceMap&-minimize',
          'postcss-loader',
          `sass-loader?indentedSyntax=sass&includePaths[]=${path.resolve(__dirname, './client/sass')}`
        ]
      },
    ]
  }
}
