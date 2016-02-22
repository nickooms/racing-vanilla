const
Scene = require('../js/scene'),
addComplexBaan = require('../js/finishes').addComplexBaan,
voetpaden = [
	require('./kruispuntzone_voetpad_2941336'),
	require('./kruispuntzone_voetpad_2943261'),
	require('./kruispuntzone_voetpad_2945408'),
	require('./kruispuntzone_voetpad_2948975'),
	require('./kruispuntzone_voetpad_2949486'),
	require('./markt/wegsegment/voetpad/4516865'),
	require('./markt/wegsegment/voetpad/382807'),
	require('./markt/wegsegment/voetpad/4515170'),
	require('./markt/wegsegment/voetpad/337261'),
	require('./markt/wegsegment/voetpad/4504433'),
	require('./markt/wegsegment/voetpad/135762')
]
module.exports = {
	addVoetpad() {
		const scene = Scene.get()
		for (let id in voetpaden) {
			addComplexBaan(id, 'kruispuntzoneVoetpad', voetpaden[id], scene)
		}
	}
}