var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  app: path.resolve(__dirname, 'app'),
  build: path.resolve(__dirname, 'build')
};

module.exports = {
	entry: PATHS.app,
	output: {
		path: PATHS.build,
		filename: 'bundle.js'
	},
	/*externals: {
		'./js/threejs/three': 'THREE'
	},*/
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			}, {
				test: /\.js$/,
				loader: 'babel',
				query: { presets: ['es2015'] }
			}
		]
	},
	plugins: [
		new HtmlwebpackPlugin({ title: 'Racing' })
		]
};