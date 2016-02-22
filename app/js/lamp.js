'use strict'

const
	THREE = require('./threejs/three'),

	Lamp = function(options) {
	  options = options || {}
	  options.y = options.y || 5
	  options.color = options.color || 0x666666
	  const
	  	lamp = new THREE.Mesh(new THREE.CylinderGeometry(0.07, options.width || 0.12, 10), new THREE.MeshBasicMaterial({})),
	  	position = lamp.position
	  position.x = options.x
	  position.y = options.y
	  position.z = -options.z
	  lamp.material.color.setHex(options.color)
	  return lamp
	}

Lamp.geometry = new THREE.CylinderGeometry(0.07, 0.12, 10)
Lamp.geometry.computeBoundingBox()
Lamp.material = new THREE.MeshBasicMaterial({})

module.exports = { Lamp }