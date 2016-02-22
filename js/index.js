var clickObjects = [];
var storage = {};
var _storage;
if (typeof chrome != 'undefined' && chrome.storage != null) {
	_storage = chrome.storage.local;
	storage.getJSON = function(key, callback) {
		_storage.get(key, function(value) {
			callback(value[key] != null ? JSON.parse(value[key]) : null);
		});
	}
	storage.setJSON = function(key, value, callback) {
		var keyValue = {};
		keyValue[key] = JSON.stringify(value);
		_storage.set(keyValue, callback);
	}
} else {
 	_storage = window.localStorage;
 	storage.getJSON = function(key, callback) {
 		var value = _storage.getItem(key);
 		callback(JSON.parse(value));
 	}
 	storage.setJSON = function(key, value, callback) {
 		_storage.setItem(key, JSON.stringify(value));
 		callback();
 	}
}
/**
 * Converts degrees to radians
 * @param  {Number} degree 
 * @return {Number} radians
 */
function rot(degree) {
	return degree * (Math.PI / 180);
}

function init() {
	addCamera();
	addScene();
	initRenderer();
	addTextures();
	addMaterials();
	addHouses([
		/*'Markt',
		'Frans Oomsplein',
		'Witvenstraat',  
		'Hooghuisstraat',
		'Kerk',*/
		//'Platanenlaan',
		//'Kastanjelaan',
		//'Berkenlaan',
		//'Wilgenlaan',
		//'Cederlaan',
		//'Molenstraat',
		//'Dennenlaan
	]);

	var onError = function(xhr) {
	};

	//addBochten();
	//addStippel();
	//addFinishes();
	//addBus();
	//addKinderkop();
	//addZebra();
	//addBaan();
	//addComplexParkings();
	addComplexVoetpaden();
	addComplexBanen();
	/*AK47.init(function() {
		AK47.show();
		//ak47.hide();
		//ak74u
		//g36c
		//hamr
		//mc29*/

	//});
	addComplexHuizen();
	//addVoetpad();
	//addParking();
	//addDal();
	addGolf();
	//addGeometry();
	addGround();
	addTrack();
	
	scene.add(new Lamp({ x: 152561, z: 221859.36 }));

	//addCar();
	initCamera();
	addStats();
	$('<div id="Menu"/>').appendTo($('body')).html(sMenu);
	$('<div id="Properties"/>').appendTo($('body'));
	addControls();
}
function animate() {
	requestAnimationFrame(animate);
	if (moving) {
		camera.position.x = trackSpline.points[percent].x;
		camera.position.z = trackSpline.points[percent].z;
		setGolf();
		if (percent >= trackSpline.points.length - 1) {
			percent = 0;
		}
		var target = trackSpline.points[percent + 1];
		target.y = camera.position.y;
		camera.lookAt(target);
		percent += 1;
	}
	renderer.render(scene, camera);
	stats.update();
}
function createScene(geometry, materials, x, y, z, b, s) {
	gevelMaterial = new THREE.MeshFaceMaterial(materials);
	init();
	animate();
}
window.onload = function() {
	init();
	animate();
};