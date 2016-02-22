const
Scene = require('../js/scene'),
addComplexBaan = require('../js/finishes').addComplexBaan,
rijbanen = [
	require('./rijbaan_4510876'),
	require('./markt/wegsegment/rijbaan/4516865'),
	require('./rijbaan_4509874'),
	require('./rijbaan_4511684'),
	require('./rijbaan_4511890'),
	require('./markt/wegsegment/rijbaan/4515170'),
	require('./markt/wegsegment/rijbaan/4504433')
]
module.exports = {
	addRijbaan() {
		const scene = Scene.get()
		for (let id in rijbanen) {
			addComplexBaan(id, 'kruispuntzone', rijbanen[id], scene)
		}
	}
}