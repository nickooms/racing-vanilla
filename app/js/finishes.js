'use strict'

const
	THREE = require('./threejs/three'),
	Scene = require('./scene'),

	addComplexBaan = function() {
		const
			scene = Scene.get(),
	  	geometry = new THREE.Geometry()

		let color = 0xff0000,
	  	height = 100,
	  	type = null,
	  	polygon = null
	  switch (arguments.length) {
	  	case 3:
	  	case 4:
	  		type = arguments[1]
	    	polygon = arguments[2]
	    	break
	    default:
	    	type = arguments[0]
	    	polygon = arguments[1]
	    	break
	  }
	  switch (type) {
	    case 'kruispuntzone':
	      //color = 0xb7b7b7
	      color = 0x333333
	      height = 0.1
	      break
	    case 'wegsegment':
	      //color = 0xcccccc
	      color = 0x343434
	      height = 0.1
	      break
	    case 'kruispuntzoneVoetpad':
	    case 'wegsegmentVoetpad':
	      //color = 0xdddddd
				
				color = 0x505050
	      height = 0
	      break
	  }
	  const triangles = THREE.Shape.Utils.triangulateShape(polygon.map(point => new THREE.Vector2(point[0], -point[1])), [])
	  geometry.vertices = polygon.map(point => new THREE.Vector3(point[0], height, -point[1]))
	  geometry.verticesNeedUpdate = true
	  geometry.computeFaceNormals()
	  geometry.faces = triangles.map(triangle => new THREE.Face3(triangle[0], triangle[1], triangle[2]))
	  geometry.computeBoundingSphere()
	  const mesh = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({
	  	shading: THREE.FlatShading,
	  	overdraw: 0.5,
	  	color: color,
	  	specular: 0x555555,
	  	shininess: 50
	  })/*new THREE.MeshBasicMaterial({
	    color: color,
	    opacity: 1,
	    side: THREE.DoubleSide,
	    transparent: false
	  })*/)
	  scene.add(mesh)
	},

	addComplexVoetpad = addComplexBaan

module.exports = {
	addComplexHuis(corners, parameters, scene) {
		scene = scene || Scene.get()
	  parameters = parameters || {}
	  const
	  	height = parameters.height || 2.5 + Math.random() * 7,
	  	floors = parameters.floors || [{}],
	  	triangles = THREE.Shape.Utils.triangulateShape(Points.toVertices(corners), [])
	  for (let i = 0; i < floors.length; i++) {
	    let
	    	h = i * height / floors.length,
	    	floor = Points.toVertices(corners, h),
	    	geom = new THREE.Geometry()
	    geom.vertices = floor
	    geom.verticesNeedUpdate = true
	    geom.computeFaceNormals()
	    geom.faces = Triangles.toFaces(triangles)
	    geom.computeBoundingSphere()
	    scene.add(new THREE.Mesh(geom, huizenMaterial.floor))
	  }
	  const wall = []
	  for (let cornerIndex in corners) {
	  	const corner = corners[cornerIndex]
	    wall.push(new THREE.Vector3(corner[0], 0, -corner[1]))
	    wall.push(new THREE.Vector3(corner[0], height, -corner[1]))
	  }
	  const faces = []
	  for (let i in corners) {
	    const offset = i * 2
	    if (i != corners.length - 1) {
	      faces.push(new THREE.Face3(offset, offset + 1, offset + 3))
	      faces.push(new THREE.Face3(offset + 3, offset, offset + 2))
	    } else {
	      faces.push(new THREE.Face3(offset, offset + 1, 1))
	      faces.push(new THREE.Face3(1, offset, 0))
	    }
	  }
	  let geometry = new THREE.Geometry()
	  geometry.vertices = wall
	  geometry.verticesNeedUpdate = true
	  geometry.computeFaceNormals()
	  geometry.faces = faces
	  geometry.computeBoundingSphere()
	  scene.add(new THREE.Mesh(geometry, huizenMaterial.randomWall()))
	  const roof = Points.toVertices(corners, height)
	  geometry = new THREE.Geometry()
	  geometry.vertices = roof
	  geometry.verticesNeedUpdate = true
	  geometry.computeFaceNormals()
	  geometry.faces = Triangles.toFaces(triangles)
	  geometry.computeBoundingSphere()
	  scene.add(new THREE.Mesh(geometry, huizenMaterial.randomRoof()))
	},
	addComplexBaan
}

window.Points = {
  toVertices(points, height) {
    const
    	is3d = height != null,
    	vertices = []
    for (let pointIndex in points) {
    	const point = points[pointIndex]
      vertices.push(is3d ? new THREE.Vector3(point[0], height, -point[1]) : new THREE.Vector2(point[0], -point[1]))
    }
    return vertices
  }
}

window.Triangles = {
  toFaces(triangles) {
    const faces = []
    for (let triangleIndex in triangles) {
    	const
    		triangle = triangles[triangleIndex],
      	floorFace = new THREE.Face3(triangle[0], triangle[1], triangle[2])
      faces.push(floorFace)
    }
    return faces
  }
}

const huizenMaterial = {
  floor: new THREE.MeshBasicMaterial({
    color: 0xcccccc,
    opacity: 1,
    side: THREE.DoubleSide,
    transparent: false
  }),
  wall: new THREE.MeshBasicMaterial({
    color: 0xff0000,
    opacity: 1,
    side: THREE.DoubleSide,
    transparent: false
  }),
  roof: new THREE.MeshBasicMaterial({
    color: 0x333333,
    opacity: 1,
    side: THREE.DoubleSide,
    transparent: false
  }),
  randomWall() {
    const
    	r = parseInt(Math.random() * 0xff),
    	g = parseInt(Math.random() * 0xff),
    	b = parseInt(Math.random() * 0xff),
    	color = r << 16 | g << 8 | b
    /*return new THREE.MeshBasicMaterial({
      color: color,
      opacity: 1,
      side: THREE.DoubleSide,
      transparent: false
    })*/
    return new THREE.MeshPhongMaterial({
	    //diffuse: color,//0x555555,
	    color: color,//0x555555,
	    specular: 0x111111,
	    shininess: 90,
	    side: THREE.DoubleSide,
	    shading: THREE.SmoothShading
	  });
  },
  randomRoof() {
    const
    	r = parseInt(Math.random() * 0xff),
    	g = parseInt(Math.random() * 0xff),
    	b = parseInt(Math.random() * 0xff),
    	color = r << 16 | g << 8 | b
    return new THREE.MeshBasicMaterial({
      color: color,
      opacity: 1,
      side: THREE.DoubleSide,
      transparent: false
    })
  }
}