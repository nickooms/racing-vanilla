var gulp = require('gulp'),
	gutil = require('gulp-util'),
	webpack = require('webpack'),
	WebpackDevServer = require('webpack-dev-server'),
	webpackConfig = require('./webpack.config.js');

gulp.task('default', ['webpack-dev-server']);
gulp.task('build-dev', ['webpack:build-dev'], function() {
	gulp.watch(['app/**/*'], ['webpack:build-dev']);
});

gulp.task('build', ['webpack:build']);
gulp.task('webpack:build', function(callback) {
	var myConfig = Object.create(webpackConfig);
	myConfig.plugins = myConfig.plugins.concat(
		new webpack.DefinePlugin({ 'process.env': { 'NODE_ENV': JSON.stringify('production') } }),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin()
	);
	webpack(myConfig, function(err, stats) {
		if (err) throw new gutil.PluginError('webpack:build', err);
		gutil.log('[webpack:build]', stats.toString({ colors: true }));
		callback();
	});
});

var myDevConfig = Object.create(webpackConfig);
myDevConfig.devtool = 'sourcemap';
myDevConfig.debug = true;

var devCompiler = webpack(myDevConfig);
gulp.task('webpack:build-dev', function(callback) {
	devCompiler.run(function(err, stats) {
		if (err) throw new gutil.PluginError('webpack:build-dev', err);
		gutil.log('[webpack:build-dev]', stats.toString({ colors: true }));
		callback();
	});
});

gulp.task('webpack-dev-server', function(callback) {
	var myConfig = Object.create(webpackConfig);
	myConfig.devtool = 'eval';
	myConfig.debug = true;
	new WebpackDevServer(webpack(myConfig), {
		publicPath: '/' + myConfig.output.publicPath,
		stats: { colors: true	}
	}).listen(8080, 'localhost', function(err) {
		if (err) throw new gutil.PluginError('webpack-dev-server', err);
		gutil.log('[webpack-dev-server]', 'http://localhost:8080/webpack-dev-server/index.html');
	});
});