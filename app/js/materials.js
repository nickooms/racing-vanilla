const THREE = require('./threejs/three')

let
	tireMaterial,
	material5,
	zebraMaterial2,
	dalMaterial,
	kinderKopMaterial,
	blackRoofMaterial,
	parkingMaterial,
	stippelMaterial,
	voetpadMaterial,
	geleborduurMaterial,
	busMaterial,
	golfMaterial,
	bochtMaterial

module.exports = {
	addMaterials() {
		dalMaterial = new THREE.MeshPhongMaterial({
			color: 0xff0000,
			specular: 0xFF6666,
			shininess: 50,
			shading: THREE.SmoothShading
		})
		tireMaterial = new THREE.MeshBasicMaterial({
			color: 0x111111,
			opacity: 1,
			side: THREE.DoubleSide,
			transparent: true
		})
		material5 = new THREE.MeshBasicMaterial({
			opacity: 1,
			side: THREE.DoubleSide,
			transparent: true
		})
		kinderKopMaterial = new THREE.MeshBasicMaterial({
			opacity: 1,
			side: THREE.DoubleSide,
			transparent: true
		})
		zebraMaterial2 = new THREE.MeshPhongMaterial({
			color: 0xff0000,
			specular: 0x666666,
			shininess: 50,
			emissive: 0x333333,
			shading: THREE.SmoothShading
		})
		stippelMaterial = new THREE.MeshBasicMaterial({
			opacity: 1,
			side: THREE.DoubleSide,
			transparent: true
		})
		voetpadMaterial = new THREE.MeshBasicMaterial({
			side: THREE.DoubleSide,
			color: 0x999999,
			transparent: false
		})
		parkingMaterial = new THREE.MeshBasicMaterial({
			side: THREE.DoubleSide,
			color: 0x333333,
			transparent: false
		})
		geleborduurMaterial = new THREE.MeshBasicMaterial({
			opacity: 1,
			side: THREE.DoubleSide,
			transparent: true
		})
		busMaterial = new THREE.MeshBasicMaterial({
			opacity: 1,
			side: THREE.DoubleSide,
			transparent: true,
			blendSrc: THREE.SrcAlphaFactor,
			blendDst: THREE.SrcColorFactor
		})
		golfMaterial = new THREE.MeshBasicMaterial({
			opacity: 1,
			side: THREE.DoubleSide,
			transparent: true
		})
		blackRoofMaterial = new THREE.MeshBasicMaterial({
			color: 0x00FF00,
			opacity: 1,
			side: THREE.DoubleSide,
			transparent: true
		})
		bochtMaterial = new THREE.MeshBasicMaterial({
			color: 0x000000,
			opacity: 1,
			side: THREE.DoubleSide,
			transparent: true
		})
	}
}