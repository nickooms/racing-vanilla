'use strict'

const
	THREE = require('./threejs/three'),

	Scene = {
		_scene: null,
		get() {
			return Scene._scene
		},
		add() {
			const scene = new THREE.Scene()
			Scene._scene = scene
			scene.fog = new THREE.Fog(0x6666ff, 1000, 10000)
			scene.add(new THREE.AmbientLight(0xffffff))
			return scene
		}
	}

module.exports = Scene