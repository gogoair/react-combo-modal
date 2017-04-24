var webpack = require('webpack');
var jsLoaders = ['babel-loader?presets[]=react,presets[]=es2015,plugins[]=add-module-exports,plugins[]=transform-runtime,presets[]=stage-0'];

module.exports = {
	entry: [
		'webpack/hot/only-dev-server',
		'./index.jsx'
	],
	output: {
		path: __dirname + '/build',
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				loaders: ['react-hot-loader'].concat(jsLoaders)
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: jsLoaders
			},
			{
				test: /\.css$/,
				loader: "style!css"
			}
		]
	},
	plugins: [
		new webpack.NoEmitOnErrorsPlugin()
	]

};