import path from "path"
import { Configuration } from "webpack"

const { NODE_ENV } = process.env

type NODE_ENV_TYPE = 'development' | 'production'

const config: Configuration = {
  entry: "./src/index.ts",
  mode: NODE_ENV as NODE_ENV_TYPE,
  target: "node",
  module: {
    rules: [
      {
        test: /\.(ts|js)?$/,
        exclude: /node_modules/,
        use: 'ts-loader', // or can use babels-loader
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
}

export default config