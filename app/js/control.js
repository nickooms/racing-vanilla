const
	THREE = require('./threejs/three'),
	Camera = require('./camera'),
	Views = require('./views'),
	toggleRoofs = require('./house').toggleRoofs,
	toggleFloors = require('./house').toggleFloors,
	Moving = require('./moving'),

	$ = selector => document.querySelector(selector),

	addEvent = (selector, fn, type) => $(selector).addEventListener(type || 'click', fn, false),

	getClickObjects = () => clickObjects,

	clickObjects = [],
	clickedPoints = []

let
	lastSelected = null,
	currentAction = null,
	finishType = 'Baan',
	finishName = 'Markt',
	object,
	divProperties,
	clickedPoint,
	clickedObject

const sMenu = `<select id="ddSplit" style="display:none;"><option>1x1</option><option selected="true">2x1</option><option>1x2</option></select>
<button id="btnSplit">Split</button>
<button id="btnMove">Move</button>
<select id="ddStraten"></select>
<button id="btnViews">Views</button><br/>
<button id="btnTiles">Tiles</button>
<button id="btnNextView">Next View</button><br/>
<button id="btnTopView">Top View</button><br/>
<button id="btnStartStop">Start</button><br/>
<button id="btnBaan">Baan</button><br/>
<button id="btnVoetpad">Voetpad</button><br/>
<button id="btnParking">Parking</button><br/>
<button id="btnWalls">Muren</button><br/>
<button id="btnRoofs">Plat Dak</button><br/>
<button id="btnFloors">Vloeren</button><br/>`

function toggleMoving() {
	const moving = !Moving.get()
	Moving.set(moving)
	$('#btnStartStop').textContent = moving ? 'Stop' : 'Start'
}

function nextView() {
	const views = Views.views
	Views.viewIndex++;
	if (Views.viewIndex >= views.length) {
		Views.viewIndex = 0
	}
	Camera.setCamera(views[Views.viewIndex])
}

function topView() {
	const
		camera = Camera.get(),
		position = camera.position

	position.y += event != undefined && event.shiftKey ? -20 : 20
	camera.lookAt(new THREE.Vector3(position.x, 0, position.z))
}

function addControls() {
	divProperties = $('#Properties')
	divProperties.innerHTML = sMenu
	addEvent('#ddSplit', showSplit, 'change')
	addEvent('#btnSplit', split)
	addEvent('#btnMove', move)
	addEvent('#btnStartStop', toggleMoving)
	addEvent('#btnViews', Camera.toggleViews)
	addEvent('#btnTiles', Camera.toggleTiles)
	addEvent('#btnNextView', nextView)
	addEvent('#btnTopView', topView)
	addEvent('#btnWalls', function() {
		toggleHouses(this)
	})
	addEvent('#btnRoofs', toggleRoofs)
	addEvent('#btnFloors', toggleFloors)
	window.addEventListener('resize', onWindowResize, false)
	document.addEventListener('mousedown', onMouseDown, false)
	document.addEventListener('mousewheel', onDocumentMouseWheel, false)
	document.addEventListener('keydown', onKeyDown)
}

function formatCoordinate(coordinate) {
	let
		x = coordinate.x + '',
		z = coordinate.z + ''
	if (x.indexOf('.') < 0) {
		x += '.'
	}
	while (x.length < 9) {
		x += '0'
	}
	if (z.indexOf('.') < 0) {
		z += '.'
	}
	while (z.length < 9) {
		z += '0'
	}
	return x.substr(0, 9) + ', ' + z.substr(0, 9)
}

function move() {
	currentAction = {
		action: 'move',
		object: lastSelected
	}
}

function split() {
	showSplit()
}

function showSplit() {
	const value = $('#ddSplit').value.split('x')
	for (let i = 0; i < parseInt(value[0]); i++) {
		var geom = object.geometry.clone(new THREE.Geometry());
		for (let iv = 0; iv < object.geometry.vertices.length; iv++) {
			let
				geomVertex = geom.vertices[iv],
				vertex = object.geometry.vertices[iv]
			geomVertex.x = vertex.x - 1
			geomVertex.y = 0.5
			geomVertex.x = vertex.z - 1
		}
		const newObject = new THREE.Mesh(geom, object.material.clone(new THREE.MeshBasicMaterial()))
		object.material.wireframe = true
		newObject.geometry.verticesNeedUpdate = true
		newObject.matrixAutoUpdate = false
		newObject.updateMatrix()
		scene.add(newObject)
	}
}

function addProperties(object, deep) {
	let s = '<table cellspacing="0" cellpadding="0">'
	for (let property in object) {
		let propertyName = property
		if (property != 'setHex' && property != 'uuid' && property.substr(0, 1) != '_') {
			let
				type = typeof object[property],
				value = object[property]
			if (type == 'function') {
				propertyName += '()'
				value = ''
			}
			if (type == 'object') {
				value = '<div onclick="this.nextSibling.style.display = this.nextSibling.style.display == \'\' ? \'none\' : \'\';">+</div>' +
					'<div style="display:none">' + (deep ? addProperties(value) : '') + '</div>'
			}
			if (property == 'vertexShader' || property == 'fragmentShader') {
				value = ''
			}
			s += '<tr><td valign="top"></td><td valign="top" nowrap="">' + propertyName + ' :</td><td valign="top">' + value + '</td></tr>'
		}
	}
	s += '</table>'
	return s
}

function onMouseDown(event) {
	let controlClicked = false
	if (divProperties.contains(event.target)) {
		return
	}
	let divs = document.querySelectorAll('div#Menu, div#tiles')
	for (let i = 0; i < divs.length; i++) {
		let div = divs[i]
		if (div.contains(event.target)) {
			controlClicked = true
		}
	}
	if (controlClicked) {
		return
	}
	event.preventDefault()
	let
		projector = new THREE.Projector(),
		vector = new THREE.Vector3((event.clientX / window.innerWidth) * 2 - 1, -(event.clientY / window.innerHeight) * 2 + 1, 1)
	projector.unprojectVector(vector, camera)
	let
		raycaster = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize()),
		intersects = raycaster.intersectObjects(GroundTest),
		dist = 0.5
	if (intersects.length > 0) {
		clickedPoint = raycaster.intersectObjects([ground])[0].point
		if (currentAction != null) {
			switch (currentAction.action) {
				case 'move':
					/*$.post('moveTrack.html', JSON.stringify({
						id: currentAction.object.name,
						x: clickedPoint.x,
						z: clickedPoint.z
					}), function() {
						currentAction.object.position.set(clickedPoint.x, 0.3, clickedPoint.z);
						currentAction = null;
					});*/
					break
			}
		} else {
			object = intersects[0].object
			let material = object.material
			//s += '<input type="text" value="' + point.x + ',' + point.z + '"/>';
			//var s = sMenu + addProperties(object, true);
			//s += '<tr><td colspan="2"></td><td>' + object.geometry.name + '</td></tr>';
			
			material.opacity = 0.8
			//material.wireframe = true;
			//material.wireframeLinewidth = 10;
			//material.vertexColors = false; 
			//material.color.setHex(0xFF0000);
			if (material.ambient != null) {
			//material.ambient.setHex(0xFF0000);
			} else {
			//material.color.setHex(0xFF0000);
			}
			/*object.material = new THREE.LineBasicMaterial({
	 color: 0xFF0000,
	 linewidth: 1
	 });*/
			//divProperties.innerHTML = s;
			
			if (lastSelected != null) {
				let
					cornersFound = 0,
					oldPoints = [],
					points = [],
					worldObject = object.getWorldObject(),
					data = object.getCorners(),
					coordinates = []
				data.forEach(coord => coordinates.push({ x: coord[0], y: 0, z: coord[1] }))
				for (let i = 0; i < coordinates.length; i++) {
					let
						coordinate = coordinates[i],
						objectX = coordinate.x,
						objectY = coordinate.y,
						objectZ = coordinate.z
					oldPoints.push(formatCoordinate(coordinate))
					let
						lastWorldObject = lastSelected.getWorldObject(),
						lastCoordinates = []
					lastSelected.getCorners().forEach(coord => lastCoordinates.push({ x: coord[0], y: 0, z: coord[1] }))
					for (let j = 0; j < lastCoordinates.length; j++) {
						let
							lastCoordinate = lastCoordinates[j],
							lastSelectedX = lastCoordinate.x,
							lastSelectedY = lastCoordinate.y,
							lastSelectedZ = lastCoordinate.z,
							xOK = Math.abs(objectX - lastSelectedX) < dist,
							yOK = Math.abs(objectY - lastSelectedY) < dist,
							zOK = Math.abs(objectZ - lastSelectedZ) < dist
						if (xOK && yOK && zOK) {
							console.log(formatCoordinate(coordinate) + ' ' + object.geometry.name.split(' ')[0])
							console.log(formatCoordinate(lastCoordinate) + ' ' + lastSelected.geometry.name.split(' ')[0])
							cornersFound++
							coordinate.x = lastSelectedX
							coordinate.y = lastSelectedY
							coordinate.z = lastSelectedZ
						}
					}
					points.push(formatCoordinate(coordinate))
				}
				if (cornersFound > 0) {
					prompt(object.geometry.name, oldPoints.join('],['))
					prompt(object.geometry.name, points.join('],['))
				}
			}
			lastSelected = object
		}
	} else {
		let intersectObjects = raycaster.intersectObjects([ground])
		if (intersectObjects.length > 0) {
			let
				point = intersectObjects[0].point,
				value = '[' + (point.x + '').substr(0, 9) + ', ' + (-point.z + '').substr(0, 9) + ']'
			clickedPoints.push(value)
			if (clickedPoints.length == 4) {
				let
					clicked4Points = clickedPoints,
					createFinish = 'addFinish([' + clicked4Points.join(',') + "], '" + finishType + "', '" + finishName + "');"
				switch (finishType) {
					case 'Baan':
						storage.getJSON('straat:' + finishName, function(straat) {
							let
								clicked4PointsBaan = clicked4Points,
								coordinates = []
							for (let i = 0; i < clicked4PointsBaan.length; i++) {
								coordinates.push(JSON.parse(clicked4PointsBaan[i]))
							}
							straat.coordinates.push(coordinates)
							storage.setJSON('straat:' + finishName, straat, function() {
								addFinish(coordinates, finishType, finishName)
							})
						})
						break
					default:
						if (prompt(finishType, createFinish) != null) {
							eval(createFinish)
						}
				}
				clickedPoints.length = 0
			}
		}
	} 
}

function onWindowResize() {
	const
		w = window.innerWidth,
		h = window.innerHeight

	camera.aspect = w / h
	camera.updateProjectionMatrix()
	renderer.setSize(w, h)
}

function onDocumentMouseDown(event) {
	event.preventDefault()
	onPointerDownPointerX = event.clientX
	onPointerDownPointerY = event.clientY
	onPointerDownLon = lon
	onPointerDownLat = lat
	document.addEventListener('mousemove', onDocumentMouseMove, false)
	document.addEventListener('mouseup', onDocumentMouseUp, false)
}

function onDocumentMouseMove(event) {
	lon = (event.clientX - onPointerDownPointerX) * 0.1 + onPointerDownLon
	lat = (event.clientY - onPointerDownPointerY) * 0.1 + onPointerDownLat
}

function onDocumentMouseUp(event) {
	document.removeEventListener('mousemove', onDocumentMouseMove, false)
	document.removeEventListener('mouseup', onDocumentMouseUp, false)
}

function onDocumentMouseWheel(event) {
	if (event.wheelDeltaY) {
		fov -= event.wheelDeltaY * 0.05
	} else if (event.wheelDelta) {
		fov -= event.wheelDelta * 0.05
	} else if (event.detail) {
		fov += event.detail * 1.0
	}
	camera.projectionMatrix.makePerspective(fov, window.innerWidth / window.innerHeight, 1, 10000)
}

function onKeyDown(event) {
	const
		camera = Camera.get(),
		position = camera.position,
		rotation = camera.rotation

	switch (event.keyCode) {
		case 'T'.charCodeAt(0):
			topView()
			//camera.rotation.x += rot(90);
			//camera.rotation.z = rot(-90);
			//camera.rotation.y = rot(90);
			/*var pos = camera.position.y;
			camera.lookAt({
				x: camera.position.x,
				y: pos,
				z: camera.position.z
			});*/
			break
		case 'D'.charCodeAt(0):
			const
				div = document.getElementById('Properties'),
				style = div.style

			style.display = style.display == '' ? 'none' : ''
			break
		case 'C'.charCodeAt(0):
			console.log(`views.push({ x: ${position.x}, y: ${position.y}, z: ${position.z}, ry: ${rotation.y / (Math.PI / 180)}})`)
			break
		case 'V'.charCodeAt(0):
			nextView()
			break
		case 32:
			toggleMoving()
			break
		case 38:
			if (event.ctrlKey) {
				position.y *= 1.1
			} else {
				position.z -= 5
			}
			break
		case 40:
			if (event.ctrlKey) {
				position.y /= 1.1
			} else {
				position.z += 5
			}
			break
		case 37:
			if (event.ctrlKey) {
				rotation.y -= rot(5)
			} else {
				position.x += 5
			}
			break
		case 39:
			if (event.ctrlKey) {
				rotation.y += rot(5)
			} else {
				position.x -= 5
			}
			break
	}
}

module.exports = {
	sMenu,
	addControls,
	getClickObjects
}