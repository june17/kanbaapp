var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var webpack = require('webpack');

const PATHS = {
	app:path.join(__dirname, 'app'),
	build: path.join(__dirname,'build')
};

module.exports = {
	entry: PATHS.app,
	output: {
		path: PATHS.build,
		filename: 'bundle.js'
	},
	resolve:{
		extensions: ['','.js','.jsx']
	},
	module:{
		loaders:[
			{
				test:/\.css$/,
				loaders:['style','css'],
				include:PATHS.app
			},
			{
				test: /\.jsx?$/,
				loaders:['babel'],
				include:PATHS.app
			}
		]
	},
	devServer : {
		historyApiFallback: true,
		hot: true,
		inline: true,
		progress: true,
		stats: 'errors-only',
		host: process.env.HOST,
		port:process.env.PORT
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin(),
		new HtmlwebpackPlugin({
			title: 'Kanban app'
		})
	]
};