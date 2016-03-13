'use strict'

const
	THREE = require('./threejs/three'),
	getClickObjects = require('./control').getClickObjects

let
	percent = 0,
	track = require('../track/track').getTrack(),
	trackSpline = new THREE.Spline(),
	newTrack = []

track.push(track[0])
trackSpline.initFromArray(track.map(trackP => trackP.slice(1)))
newTrack.push(track[0])
for (let i = 1; i < track.length; i++) {
	let
		prev = track[i - 1],
		point = track[i],
		width = Math.abs(prev[1] - point[1]),
		height = Math.abs(prev[3] - point[3]),
		rate = width / height,
		dist = Math.sqrt(width * width + height * height) / 2,
		x = Math.sqrt((dist * dist) * rate),
		y = Math.sqrt((dist * dist) / rate)//,
		//nr = 1

	x += Math.min(prev[1], point[1])
	y += Math.min(prev[3], point[3])
	let newPoint = new THREE.Mesh(new THREE.SphereGeometry(0.5, 10, 10), new THREE.MeshBasicMaterial({
		color: 0x0000ff,
		wireframe: false,
		side: THREE.DoubleSide
	}))
	newPoint.name = 'RED'
	x = (3 * prev[1] + point[1]) / 4
	y = (3 * prev[3] + point[3]) / 4
	newTrack.push([0, x, 0, y, 0xffffff])
	x = (prev[1] + point[1]) / 2
	y = (prev[3] + point[3]) / 2
	newTrack.push([0, x, 0, y, 0xffffff])
	x = (prev[1] + point[1] * 3) / 4
	y = (prev[3] + point[3] * 3) / 4
	newTrack.push([0, x, 0, y, 0xffffff])
	newTrack.push(track[i])
}
track = newTrack
trackSpline = new THREE.Spline()
trackSpline.initFromArray(track.map(trackP => trackP.slice(1)))
trackSpline.reparametrizeByArcLength(trackSpline.points.length * 50)
let
	trackMaterial,
	trackGeometry = new THREE.Geometry(),
	trackColors = [],
	trackPoint,
	trackPoints = [],
	trackLength = track.length * 1

for (let i = 0; i < trackLength; i++) {
	let
		color = (i * 256 / track.length) << 16 | 0 << 8 | (255 - (i * 256 / track.length)),
		trackIndex = i == trackLength ? 0 : i
	if (track[i].length == 5) {
		color = track[i][4] == 0xffffff ? 0xffffff : 0xff0000
	}
	let
		x = track[trackIndex][1],
		y = track[trackIndex][3]
	
	trackGeometry.vertices[i] = new THREE.Vector3(x, 0.3, y)
	trackColors[i] = new THREE.Color(0xFF0000)
	trackPoint = new THREE.Mesh(new THREE.SphereGeometry(0.3, 10, 10), new THREE.MeshBasicMaterial({
		color: color,
		wireframe: false,
		side: THREE.DoubleSide
	}))
	try {
		trackPoint.name = track[i][0]
	} catch (e) {
		debugger;
	}
	trackPoint.position.set(x, 0.3, y)
	trackPoints.push(trackPoint)
	getClickObjects().push(trackPoint)
}
trackGeometry.colors = trackColors
trackMaterial = new THREE.LineBasicMaterial({
	color: 0xff0000,
	opacity: 1,
	linewidth: 1000,
	vertexColors: THREE.VertexColors
})

module.exports = {
	trackSpline,
	percent
}