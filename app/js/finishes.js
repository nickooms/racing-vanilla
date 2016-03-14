'use strict'

const	THREE = require('./threejs/three');
const Scene = require('./scene');

function getColorAndHeight(type) {
	switch (type) {
		case 'kruispuntzone':
			return { color: 0x333333, height: 0.1 };
		case 'wegsegment':
			return { color: 0x343434, height: 0.1 };
		case 'kruispuntzoneVoetpad':
		case 'wegsegmentVoetpad':
			return { color: 0x505050, height: 0 };
		default:
			throw new Error(`Unknown type ${type}`);
	}
}

function getOptions(args) {
	switch (args.length) {
  	case 3:
  	case 4:
  		return { type: args[1], polygon: args[2] };
    default:
    	return { type: args[0], polygon: args[1] };
  }
}

function addComplexBaan() {
	const scene = Scene.get();
  const geometry = new THREE.Geometry()
  const { type, polygon } = getOptions(arguments);
  const { color, height } = getColorAndHeight(type);
  const triangles = THREE.Shape.Utils.triangulateShape(polygon.map(point => new THREE.Vector2(point[0], -point[1])), []);
  geometry.vertices = polygon.map(point => new THREE.Vector3(point[0], height, -point[1]));
  geometry.verticesNeedUpdate = true;
  geometry.computeFaceNormals();
  geometry.faces = triangles.map(triangle => new THREE.Face3(triangle[0], triangle[1], triangle[2]));
  geometry.computeBoundingSphere();
  const mesh = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({
  	shading: THREE.FlatShading,
  	overdraw: 0.5,
  	color: color,
  	specular: 0x555555,
  	shininess: 50
  }));
  scene.add(mesh);
}

function addComplexHuis(corners, parameters, scene) {
	scene = scene || Scene.get();
  parameters = parameters || {};
  const height = parameters.height || 2.5 + Math.random() * 7;
  const floors = parameters.floors || [{}];
  const triangles = THREE.Shape.Utils.triangulateShape(Points.toVertices(corners), []);
  for (let i = 0; i < floors.length; i++) {
    let h = i * height / floors.length;
    let floor = Points.toVertices(corners, h);
    let geom = new THREE.Geometry();
    geom.vertices = floor;
    geom.verticesNeedUpdate = true;
    geom.computeFaceNormals();
    geom.faces = Triangles.toFaces(triangles);
    geom.computeBoundingSphere();
    scene.add(new THREE.Mesh(geom, huizenMaterial.floor));
  }
  const wall = [];
  for (let cornerIndex in corners) {
  	const corner = corners[cornerIndex];
    wall.push(new THREE.Vector3(corner[0], 0, -corner[1]));
    wall.push(new THREE.Vector3(corner[0], height, -corner[1]));
  }
  const faces = [];
  for (let i in corners) {
    const offset = i * 2;
    if (i != corners.length - 1) {
      faces.push(new THREE.Face3(offset, offset + 1, offset + 3));
      faces.push(new THREE.Face3(offset + 3, offset, offset + 2));
    } else {
      faces.push(new THREE.Face3(offset, offset + 1, 1));
      faces.push(new THREE.Face3(1, offset, 0));
    }
  }
  let geometry = new THREE.Geometry();
  geometry.vertices = wall;
  geometry.verticesNeedUpdate = true;
  geometry.computeFaceNormals();
  geometry.faces = faces;
  geometry.computeBoundingSphere();
  scene.add(new THREE.Mesh(geometry, huizenMaterial.randomWall()));
  const roof = Points.toVertices(corners, height);
  geometry = new THREE.Geometry();
  geometry.vertices = roof;
  geometry.verticesNeedUpdate = true;
  geometry.computeFaceNormals();
  geometry.faces = Triangles.toFaces(triangles);
  geometry.computeBoundingSphere();
  scene.add(new THREE.Mesh(geometry, huizenMaterial.randomRoof()));
}

const addComplexVoetpad = addComplexBaan;

module.exports = { addComplexHuis, addComplexBaan };

window.Points = {
  toVertices(points, height) {
    const is3d = height != null;
    const vertices = [];
    for (let pointIndex in points) {
    	const point = points[pointIndex];
      vertices.push(is3d ? new THREE.Vector3(point[0], height, -point[1]) : new THREE.Vector2(point[0], -point[1]));
    }
    return vertices;
  }
}

window.Triangles = {
  toFaces(triangles) {
    const faces = [];
    for (let triangleIndex in triangles) {
    	const triangle = triangles[triangleIndex];
      const floorFace = new THREE.Face3(triangle[0], triangle[1], triangle[2]);
      faces.push(floorFace);
    }
    return faces;
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
    const r = parseInt(Math.random() * 0xff);
    const g = parseInt(Math.random() * 0xff);
    const b = parseInt(Math.random() * 0xff);
    const color = r << 16 | g << 8 | b;
    return new THREE.MeshPhongMaterial({
	    color: color,
	    specular: 0x111111,
	    shininess: 90,
	    side: THREE.DoubleSide,
	    shading: THREE.SmoothShading
	  });
  },
  randomRoof() {
    const r = parseInt(Math.random() * 0xff);
    const g = parseInt(Math.random() * 0xff);
    const b = parseInt(Math.random() * 0xff);
    const color = r << 16 | g << 8 | b;
    return new THREE.MeshBasicMaterial({
      color: color,
      opacity: 1,
      side: THREE.DoubleSide,
      transparent: false
    });
  }
}