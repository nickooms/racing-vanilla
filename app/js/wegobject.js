var Wegobject = function(points) {
	var wegobject = new THREE.Object3D();
	var material = new THREE.LineBasicMaterial({
		color: 0x0000ff
	});
	var geometry = new THREE.Geometry();
	var min = { x: Infinity, y: Infinity };
	var max = { x: -Infinity, y: -Infinity };
	points.forEach(function(point) {
		var x = point[0];
		var y = point[1];
		min.x = Math.min(x, min.x);
		min.y = Math.min(y, min.y);
		max.x = Math.max(x, max.x);
		max.y = Math.max(y, max.y);
		geometry.vertices.push(new THREE.Vector3(x, 0.1, -y));
	});
	//var line = new THREE.Line(geometry, material);
	//wegobject.add(line);
	var bbox = new THREE.Geometry();
	bbox.vertices.push(new THREE.Vector3(min.x, 0.1, -min.y))
	bbox.vertices.push(new THREE.Vector3(max.x, 0.1, -min.y))
	bbox.vertices.push(new THREE.Vector3(max.x, 0.1, -max.y))
	bbox.vertices.push(new THREE.Vector3(min.x, 0.1, -max.y))
	bbox.vertices.push(new THREE.Vector3(min.x, 0.1, -min.y))
	wegobject.add(new THREE.Line(bbox, material));
	return wegobject;
}