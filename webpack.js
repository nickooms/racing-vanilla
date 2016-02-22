var webpack = require('webpack');

module.exports = {
	entry: {
		app: './app/index.js',
		vendor: [],
	},
	/*externals: {
		'./js/threejs/three': 'THREE'
	},*/
	output: {
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
	]
};