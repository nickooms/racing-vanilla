'use strict';

const THREE = require('./threejs/three');

const Scene = {

	_scene: null,

	get() {
		return Scene._scene;
	},

	add() {
		const scene = new THREE.Scene();
		Scene._scene = scene;
		scene.fog = new THREE.Fog(0xffffff/*0x666655*/, 1000, 10000);
		scene.add(new THREE.AmbientLight(0xffffff/*0x333333*/));
		/*const light1 = new THREE.PointLight(0xff0040, 2, 0)
		light1.position.set(152561, 10, 221859.36)
		scene.add(light1)

		const light2 = new THREE.PointLight(0x0040ff, 2, 0)
		light2.position.set(152559, 10, 221857.36)
		scene.add(light2)*/

		return scene;
	}

}

module.exports = Scene;