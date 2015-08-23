function addComplexBaan() {
  if (arguments.length == 3) {
    var id = arguments[0];
    var type = arguments[1];
    var complexBanen = arguments[2]
  } else {
    var complexBanen = arguments[0];
  }
  var color = 0xff0000;
  var height = 100;
  switch (type) {
    case 'kruispuntzone':
      color = 0xb7b7b7;
      height = 0;
      break;
    case 'wegsegment':
      color = 0xcccccc;
      height = 0;
      break;
    case 'kruispuntzoneBaan':
    case 'wegsegmentBaan':
      color = 0x666666;
      height = 0.1;
      break;
  }
  complexBanenVertices = [];
  for (var i = 0; i < complexBanen.length; i++) {
    complexBaan = complexBanen[i];
    complexBanenVertices.push(new THREE.Vector2(complexBaan[0], -complexBaan[1]));
  }
  complexBanenHoles = [];
  complexBanenTriangles = THREE.Shape.Utils.triangulateShape(complexBanenVertices, complexBanenHoles);
  complexBanenVertices = [];
  for (var i = 0; i < complexBanen.length; i++) {
    complexBaan = complexBanen[i];
    complexBanenVertices.push(new THREE.Vector3(complexBaan[0], height, -complexBaan[1]));
  }
  complexBanenGeometry = new THREE.Geometry();
  complexBanenMaterial = new THREE.MeshBasicMaterial({
    color: color,
    opacity: 1,
    side: THREE.DoubleSide,
    transparent: false
  });
  complexBanenGeometry.vertices = complexBanenVertices;
  complexBanenGeometry.verticesNeedUpdate = true;
  complexBanenGeometry.computeFaceNormals();
  for (var i = 0; i < complexBanenTriangles.length; i++) {
  	var triangle = complexBanenTriangles[i];
    complexBanenGeometry.faces.push(new THREE.Face3(triangle[0], triangle[1], triangle[2]));
  }
  complexBanenGeometry.computeBoundingSphere();
  complexBanenMesh = new THREE.Mesh(complexBanenGeometry, complexBanenMaterial);
  scene.add(complexBanenMesh);
}

function addComplexHuis(corners) {
  var height = 2.5 + Math.random() * 7;
  var triangles = THREE.Shape.Utils.triangulateShape(Points.toVertices(corners), []);
  var floor = Points.toVertices(corners, 0);
  var geometry = new THREE.Geometry();
  geometry.vertices = floor;
  geometry.verticesNeedUpdate = true;
  geometry.computeFaceNormals();
  geometry.faces = Triangles.toFaces(triangles);
  geometry.computeBoundingSphere();
  scene.add(new THREE.Mesh(geometry, huizenMaterial.floor));
  var wall = [];
  for (var cornerIndex in corners) {
  	var corner = corners[cornerIndex];
    wall.push(new THREE.Vector3(corner[0], 0, -corner[1]));
    wall.push(new THREE.Vector3(corner[0], height, -corner[1]));
  }
  var faces = [];
  for (var i in corners) {
    var offset = i * 2;
    if (i != corners.length - 1) {
      faces.push(new THREE.Face3(offset, offset + 1, offset + 3));
      faces.push(new THREE.Face3(offset + 3, offset, offset + 2));
    } else {
      faces.push(new THREE.Face3(offset, offset + 1, 1));
      faces.push(new THREE.Face3(1, offset, 0));
    }
  }
  geometry = new THREE.Geometry();
  geometry.vertices = wall;
  geometry.verticesNeedUpdate = true;
  geometry.computeFaceNormals();
  geometry.faces = faces;
  geometry.computeBoundingSphere();
  scene.add(new THREE.Mesh(geometry, huizenMaterial.randomWall()));
  var roof = Points.toVertices(corners, height);
  geometry = new THREE.Geometry();
  geometry.vertices = roof;
  geometry.verticesNeedUpdate = true;
  geometry.computeFaceNormals();
  geometry.faces = Triangles.toFaces(triangles);
  geometry.computeBoundingSphere();
  scene.add(new THREE.Mesh(geometry, huizenMaterial.randomRoof()));
}
window.Points = {
  toVertices: function(points, height) {
    var is3d = height != null;
    var vertices = [];
    for (var pointIndex in points) {
    	var point = points[pointIndex];
      vertices.push(is3d ? new THREE.Vector3(point[0], height, -point[1]) : new THREE.Vector2(point[0], -point[1]));
    }
    return vertices;
  }
};
window.Triangles = {
  toFaces: function(triangles) {
    var faces = [];
    for (var triangleIndex in triangles) {
    	var triangle = triangles[triangleIndex];
      var floorFace = new THREE.Face3(triangle[0], triangle[1], triangle[2]);
      faces.push(floorFace);
    }
    return faces;
  }
};
var huizenMaterial = {
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
  randomWall: function() {
    var r = parseInt(Math.random() * 256);
    var g = parseInt(Math.random() * 256);
    var b = parseInt(Math.random() * 256);
    var color = r << 16 | g << 8 | b;
    return new THREE.MeshBasicMaterial({
      color: color,
      opacity: 1,
      side: THREE.DoubleSide,
      transparent: false
    });
  },
  randomRoof: function() {
    var r = parseInt(Math.random() * 256);
    var g = parseInt(Math.random() * 256);
    var b = parseInt(Math.random() * 256);
    var color = r << 16 | g << 8 | b;
    return new THREE.MeshBasicMaterial({
      color: color,
      opacity: 1,
      side: THREE.DoubleSide,
      transparent: false
    });
  }
};
