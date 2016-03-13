'use strict';

const THREE = require('./threejs/three');
const Scene = require('./scene');

const Lamp = function(options) {
	const scene = Scene.get();
  options = options || {};
  options.y = options.y || 5;
  options.color = options.color || 0x110000;
  const cylinder = new THREE.CylinderGeometry(0.07, options.width || 0.12, 10);
  const lamp = new THREE.Mesh(cylinder, new THREE.MeshBasicMaterial({}));
	const position = lamp.position;
	position.x = options.x;
	position.y = options.y;
	position.z = -options.z;
	lamp.material.color.setHex(options.color);
	const spotLight = new THREE.SpotLight(0xffffff);
	spotLight.position.set(position.x, 1, position.z);
	spotLight.castShadow = true;
	spotLight.shadowMapWidth = 1024;
	spotLight.shadowMapHeight = 1024;
	spotLight.shadowCameraNear = 500;
	spotLight.shadowCameraFar = 4000;
	spotLight.shadowCameraFov = 30;
	scene.add(spotLight);
	const dirLight = new THREE.DirectionalLight(0xffffff, 1);
	dirLight.position.set(options.x, 1, options.z).normalize();
	dirLight.target = lamp;
	scene.add(dirLight);
	return lamp;
}

Lamp.geometry = new THREE.CylinderGeometry(0.07, 0.12, 10);
Lamp.geometry.computeBoundingBox();
Lamp.material = new THREE.MeshBasicMaterial({});

module.exports = { Lamp };