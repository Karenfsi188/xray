import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { xrayPlugin } from '@stinsky/xray/plugin'

export default {
  entry: './src/main.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './index.html' }),
    xrayPlugin({ bundler: 'webpack' }),
  ],
  devServer: {
    port: 3003,
    hot: true,
  },
}
