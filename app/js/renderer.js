'use strict'

const
	THREE = require('./threejs/three'),
	Scene = require('./scene')

let renderer = null

module.exports = {
	getRenderer() {
		return renderer || initRenderer()
	},
	initRenderer() {
		if (renderer != undefined) 
			document.body.removeChild(renderer.domElement)
		try {
			renderer = new THREE.WebGLRenderer({
				alpha: false,
				depth: true,
				stencil: false,
				antialias: false,
				preserveDrawingBuffer: false
			})
		} catch (e) {
			try {
				renderer = new THREE.WebGLRenderer({
					antialias: true,
					alpha: true,
					devicePixelRatio: 1,
					preserveDrawingBuffer: true
				})
			} catch (e2) {
				renderer = new THREE.CanvasRenderer({})
			}
		}
		renderer.setClearColor(Scene.get().fog.color, 1)
		renderer.setSize(window.innerWidth, window.innerHeight)
		renderer.sortObjects = true
		document.body.appendChild(renderer.domElement)
		return renderer
	}
}