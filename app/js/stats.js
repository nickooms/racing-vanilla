var Stats = require('./threejs/stats');

var stats;
module.exports = {
	addStats: function() {
		stats = new Stats();
		stats.domElement.style.position = 'absolute';
		stats.domElement.style.top = '0px';
		stats.domElement.style.zIndex = 100;
		//document.body.appendChild(stats.domElement);
		stats.domElement.style.left = stats.domElement.style.width + 1000;
	},
	getStats: function() {
		return stats;
	}
};