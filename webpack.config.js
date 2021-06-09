const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
	mode: 'development',
	entry: './src/index.tsx',
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
		alias: {
			'@src': path.resolve(__dirname, 'src'),
		},
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: '/node_modules/',
				loader: 'babel-loader',
			},
			{
				test: /\.css$/,
				use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
			},
			{
				test: /\.jfif$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
				},
			},
			{
				test: /\.tsx?$/,
				loader: 'awesome-typescript-loader',
			},
		],
	},
	devServer: {
		historyApiFallback: true,
		inline: true,
		port: 8080,
		hot: true,
		publicPath: '/',
	},

	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
	],
};

module.exports = config;
