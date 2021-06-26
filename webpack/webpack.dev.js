const path = require('path')
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    plugins: [
        new webpack.DefinePlugin({
          'process.env.name' : JSON.stringify('SVB local environment')
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, './../build'),
        open: true,
        port: 1000,
        hot: true
      },
}