/* eslint-disable node/no-unpublished-import */
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

const config = {
  mode: 'development',
  entry: ['./src/index.ts'],
  output: {
    path: path.resolve(__dirname, 'docs'),
  },
  devServer: {
    contentBase: 'docs',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};

export default [config];
