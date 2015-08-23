var Lamp = function(options) {
  options = options || {};
  options.y = options.y || 5;
  options.color = options.color || 0x666666;
  var lamp = new THREE.Mesh(Lamp.geometry, Lamp.material);
  lamp.position.x = options.x;
  lamp.position.y = options.y;
  lamp.position.z = -options.z;
  lamp.material.color.setHex(options.color);
  return lamp;
};
Lamp.geometry = new THREE.CylinderGeometry(0.07, 0.12, 10);
Lamp.geometry.computeBoundingBox();
Lamp.material = new THREE.MeshBasicMaterial({ });