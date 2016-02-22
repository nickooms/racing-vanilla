'use strict'

const
	Scene = require('./scene'),
	addComplexHuis = require('./finishes').addComplexHuis

module.exports = {
	addStraat(naam, huisnummers) {
		const scene = Scene.get()
		for (let huisnummer in huisnummers) {
			const huis = huisnummers[huisnummer]
			addComplexHuis(huis, {}, scene)
		}
	},
	addComplexHuizen() {
		addKapellen()
		addHoevenen()
		/*function addStraat(straatnaam, bbox, gebouwen) {
			let min = bbox.min
			for (let index in gebouwen) {
				let
					gebouw = gebouwen[index],
					polygon = gebouw.map(point => [point[0] + min.x, point[1] + min.y])
				//addComplexHuis(polygon, gebouw[1])
			}
		}*/
		function addHoevenen() {
			function addMarkt() {
			}
			addMarkt()
		}
		function addKapellen() {	
		}
	}
}