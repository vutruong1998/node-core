const path = require('path')

const {
  NODE_ENV = 'production',
} = process.env

module.exports = {
  entry: './src/index.ts',
  mode: NODE_ENV,
  target: 'node',
  module: { // loaders
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js'
  },
  // plugins: {}
}