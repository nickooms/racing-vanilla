'use strict'

require('./js/threejs/three').THREE

const
	Camera = require('./js/camera'),
	Scene = require('./js/scene'),
	initRenderer = require('./js/renderer').initRenderer,
	addTextures = require('./js/textures').addTextures,
	addMaterials = require('./js/materials').addMaterials,
	addHouses = require('./houses/houses').addHouses,
	addComplexVoetpaden = require('./js/complex-voetpaden').addComplexVoetpaden,
	addComplexHuizen = require('./js/complex-huizen').addComplexHuizen,
	addGolf = require('./js/golf').addGolf,
	addGround = require('./js/ground').addGround,
	Lamp = require('./js/lamp').Lamp,
	sMenu = require('./js/control').sMenu,
	addControls = require('./js/control').addControls,
	trackSpline = require('./js/track').trackSpline,
	Moving = require('./js/moving'),
	addVoetpad = [require('./data/markt_voetpad').addVoetpad],
	addRijbaan = [require('./data/markt_rijbaan').addRijbaan],
	addHuizen = [require('./data/markt_huizen').addHuizen]

let
	renderer = null,
	percent = require('./js/track').percent

require('./css/main.css')
require('./css/menu.css')

function init() {
	Camera.add()
	const scene = Scene.add()
	renderer = initRenderer()
	addTextures()
	addMaterials()
	addHouses([/*'Markt'*/])
	//addBochten();
	//addStippel();
	//addFinishes();
	//addBus();
	//addKinderkop();
	//addZebra();
	//addBaan();
	//addComplexParkings();
	addComplexVoetpaden()
	addComplexHuizen()
	//addVoetpad();
	//addParking();
	//addDal();
	addGolf()
	//addGeometry();
	addGround()
	//addTrack();
	scene.add(new Lamp({ x: 152561, z: 221859.36 }))

	Camera.init()
	//addStats();
	const divMenu = document.createElement('div')
	divMenu.id = 'Menu'
	document.body.appendChild(divMenu)
	divMenu.innerHTML = sMenu
	const divProperties = document.createElement('div')
	divProperties.id = 'Properties'
	document.body.appendChild(divProperties)
	addControls()
	for (let voetpad of addVoetpad) voetpad()
	for (let rijbaan of addRijbaan) rijbaan()
	for (let huis of addHuizen) huis()
}

function animate() {
	const
		camera = Camera.get(),
		scene = Scene.get()

	requestAnimationFrame(animate)
	if (Moving.get()) {
		const points = trackSpline.points,
			position = camera.position
		position.x = points[percent].x
		position.z = points[percent].z
		//setGolf();
		if (percent >= points.length - 1) {
			percent = 0
		}
		const target = points[percent + 1]
		target.y = position.y
		camera.lookAt(target)
		percent += 1
	}
	renderer.render(scene, camera)
	//var stats = getStats();
	//stats.update();
}

window.onload = function() {
	init()
	animate()
}