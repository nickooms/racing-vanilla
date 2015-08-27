//alert(1);
function toggle() {
	var visible = this.visible = !this.visible;
	for (var i = 0; i < this.items.length; i++) {
		var item = this.items[i];
		if (item.type == this.name) {
			item.finishMesh.visible = visible;
		}
	}
}
//alert(2);
Stippel = {
	name: 'Stippel',
	visible: true,
	items: [],
	toggle: toggle
}
Zebra = {
	name: 'Zebra',
	visible: true,
	items: [],
	toggle: toggle
}
Dals = {
	name: 'Dal',
	visible: false,
	items: [],
	toggle: toggle
}
Ramen = {
	name: 'Ramen',
	visible: true,
	items: [],
	toggle: toggle
}
Baan = {
	name: 'Baan',
	visible: true,
	items: [],
	toggle: toggle	
}
Voetpad = {
	name: 'Voetpad',
	visible: true,
	items: [],
	toggle: toggle	
}
Parking = {
	name: 'Parking',
	visible: true,
	items: [],
	toggle: toggle	
}

//alert(3);

var complexBanen, complexBanenVertices, complexBaan, complexBanenHoles, complexBanenTriangles, complexBanenGeometry, complexBanenMaterial, complexBanenMesh;



//alert(5);

var complexVoetpaden, complexVoetpadenVertices, complexVoetpad, complexVoetpadenHoles, complexVoetpadenTriangles, complexVoetpadenGeometry, complexVoetpadenMaterial, complexVoetpadenMesh;
function addComplexVoetpad(complexVoetpaden) {
	complexVoetpadenVertices = [];
	for (var i = 0; i < complexVoetpaden.length; i++) {
		complexVoetpad = complexVoetpaden[i];
		complexVoetpadenVertices.push(new THREE.Vector2(complexVoetpad[0]/*, 0*/, -complexVoetpad[1]));
	}
	complexVoetpadenHoles = [];
	complexVoetpadenTriangles = THREE.Shape.Utils.triangulateShape(complexVoetpadenVertices, complexVoetpadenHoles);
	complexVoetpadenVertices = [];
	for (var i = 0; i < complexVoetpaden.length; i++) {
		complexVoetpad = complexVoetpaden[i];
		complexVoetpadenVertices.push(new THREE.Vector3(complexVoetpad[0], 0, -complexVoetpad[1]));
	}
	complexVoetpadenGeometry = new THREE.Geometry();
	complexVoetpadenMaterial = new THREE.MeshBasicMaterial({
		color: 0x999999,
		opacity: 1,
		side: THREE.DoubleSide,
		transparent: false
	});
	complexVoetpadenGeometry.vertices = complexVoetpadenVertices;
	complexVoetpadenGeometry.verticesNeedUpdate = true;
	complexVoetpadenGeometry.computeFaceNormals();
	for( var i = 0; i < complexVoetpadenTriangles.length; i++ ) {
	    complexVoetpadenGeometry.faces.push(new THREE.Face3(complexVoetpadenTriangles[i][0], complexVoetpadenTriangles[i][1], complexVoetpadenTriangles[i][2]));
	}
	complexVoetpadenGeometry.computeBoundingSphere();
	complexVoetpadenMesh = new THREE.Mesh(complexVoetpadenGeometry, complexVoetpadenMaterial);
	scene.add(complexVoetpadenMesh);
}

//alert(6);

//alert(7);
//alert(8);
/*window.alert = function(text) {
	console.log(text);
};*/

//alert(8);
//Hoogte : http://geo.agiv.be/ogc/wms/product/DHMV?request=getcapabilities&version=1.3.0&service=wms




//alert(9);


var complexParkings, complexParkingsVertices, complexParking, complexParkingsHoles, complexParkingsTriangles, complexParkingsGeometry, complexParkingsMaterial, complexParkingsMesh;
function addComplexParking(complexParkings) {
	complexParkingsVertices = [];
	for (var i = 0; i < complexParkings.length; i++) {
		complexParking = complexParkings[i];
		complexParkingsVertices.push(new THREE.Vector2(complexParking[0]/*, 0*/, -complexParking[1]));
	}
	complexParkingsHoles = [];
	complexParkingsTriangles = THREE.Shape.Utils.triangulateShape(complexParkingsVertices, complexParkingsHoles);
	complexParkingsVertices = [];
	for (var i = 0; i < complexParkings.length; i++) {
		complexParking = complexParkings[i];
		complexParkingsVertices.push(new THREE.Vector3(complexParking[0], 0.01, -complexParking[1]));
	}
	complexParkingsGeometry = new THREE.Geometry();
	complexParkingsMaterial = new THREE.MeshBasicMaterial({
		color: 0x333333,
		opacity: 1,
		side: THREE.DoubleSide,
		transparent: false
	});
	complexParkingsGeometry.vertices = complexParkingsVertices;
	complexParkingsGeometry.verticesNeedUpdate = true;
	complexParkingsGeometry.computeFaceNormals();
	for( var i = 0; i < complexParkingsTriangles.length; i++ ) {
	    complexParkingsGeometry.faces.push(new THREE.Face3(complexParkingsTriangles[i][0], complexParkingsTriangles[i][1], complexParkingsTriangles[i][2]));
	}
	complexParkingsGeometry.computeBoundingSphere();
	complexParkingsMesh = new THREE.Mesh(complexParkingsGeometry, complexParkingsMaterial);
	scene.add(complexParkingsMesh);
}


//alert(10);

function addBus() {
	addFinish([[152533.23, 221837.77], [152558.02, 221854.03], [152555.22, 221854.70], [152533.76, 221840.30]], 'Bus');
	//addFinish([[152532.56, 221837.39],[152558.15, 221854.05],[152556.82, 221855.78],[152531.23, 221838.99]], 'Bus');
}
//alert(11);
function addKinderkop() {
	addFinish([[152573.88, 221852.43], [152606.54, 221875.89], [152605.48, 221877.76], [152572.55, 221854.30]], 'KinderKop');
	addFinish([[152491.90, 221826.44], [152459.78, 221875.89], [152459.64, 221872.03], [152481.77, 221834.44]], 'KinderKop');
	addFinish([[152530.29, 221821.24], [152561.35, 221843.50], [152561.49, 221846.57], [152526.96, 221821.64]], 'KinderKop');
	addFinish([[152562.69, 221857.36], [152602.14, 221882.82], [152600.68, 221884.69], [152562.95, 221860.03]], 'KinderKop');
}
//alert(12);
//var stippelVisible = true;
var dalsVisible = false;
var dalsLoaded = false;
function toggleDals() {
	if (!dalsLoaded) {
		addDal();
	}
	dalsVisible = !dalsVisible;
	for (var i = 0; i < finishes.length; i++) {
		if (finishes[i].type == 'Dal') {
			finishes[i].finishMesh.visible = dalsVisible;
		}
	}
}
//alert(13);
function addStippel() {
	addFinish([[152466.98, 221879.49], [152463.24, 221884.96], [152456.98, 221882.16], [152459.78, 221875.76]], 'Stippel');
	addFinish([[152568.55, 221851.36], [152605.48, 221877.49], [152602.14, 221882.82], [152565.69, 221859.36]], 'Stippel');
	addFinish([[152558.02, 221854.03], [152529.63, 221835.77], [152534.16, 221826.84], [152561.49, 221846.57]], 'Stippel');
	addFinish([[152611.61, 221890.54], [152604.54, 221901.21], [152599.88, 221897.61], [152606.81, 221885.74]], 'Stippel');
	//addFinish([[152583.75, 221933.47], [152575.35, 221948.13], [152569.22, 221945.20], [152578.55, 221930.54]], 'Stippel');
	//addFinish([[152575.35, 221948.13], [152561.35, 221939.27], [152563.22, 221935.94], [152578.95, 221942.26]], 'Stippel');
	//addFinish([[152471.37, 221896.01],[152438.05, 221880.68],[152440.58, 221874.81],[152477.77, 221892.54]], 'Stippel');
	addFinish([[152472.44, 221898.67], [152471.24, 221896.54], [152474.31, 221890.68], [152479.51, 221893.08]], 'Stippel');
	addFinish([[152469.38, 221859.88], [152485.64, 221833.62], [152492.84, 221838.56], [152474.84, 221865.88]], 'Stippel');
	addFinish([[152484.70, 221835.49], [152507.63, 221813.36], [152492.30, 221838.96], [152492.30, 221838.96]], 'Stippel');
	addFinish([[152604.54, 221901.21], [152583.75, 221933.47], [152578.55, 221930.54], [152599.88, 221897.61]], 'Stippel');
	addFinish([[152604.58, 222080.22],[152644.97, 222108.35],[152649.23, 222101.68],[152608.58, 222074.62]], 'Stippel', 'Wilgenlaan');
	addFinish([[152636.30, 222000.91],[152599.91, 222054.10],[152603.91, 222057.16],[152640.43, 222003.97]], 'Stippel', 'Berkenlaan');
	addFinish([[152586.31, 221953.32],[152630.44, 221977.85],[152633.77, 221972.65],[152588.98, 221947.59]], 'Stippel', 'Witvenstraat');
	addFinish([[152562.72, 221955.19],[152535.66, 221997.31],[152540.86, 222000.64],[152568.05, 221958.52]], 'Stippel', 'Hooghuisstraat');
	addFinish([[152628.57, 222195.00],[152709.35, 222249.52],[152713.62, 222243.25],[152632.44, 222188.86]], 'Stippel', 'Palmenlaan');
	addFinish([[152632.44, 222188.86],[152625.77, 222184.20],[152621.77, 222190.73],[152628.57, 222195.00]], 'Stippel', 'Palmenlaan');
	addFinish([[152625.77, 222184.20],[152620.84, 222181.26],[152616.17, 222188.06],[152621.77, 222190.73]], 'Stippel', 'Palmenlaan');
	addFinish([[152614.72, 222177.36],[152610.77, 222183.13],[152616.17, 222188.06],[152620.84, 222181.26]], 'Stippel', 'Palmenlaan');
	addFinish([[152610.77, 222183.13],[152607.58, 222187.93],[152613.51, 222192.20],[152616.17, 222188.06]], 'Stippel', 'Platanenlaan');
	addFinish([[152607.58, 222187.93],[152601.91, 222195.66],[152608.18, 222199.93],[152613.51, 222192.20]], 'Stippel', 'Platanenlaan');
	addFinish([[152618.43, 222171.73],[152614.72, 222177.36],[152620.84, 222181.26],[152624.84, 222175.67]], 'Stippel', 'Platanenlaan');
	addFinish([[152622.97, 222165.00],[152618.43, 222171.73],[152624.84, 222175.67],[152629.10, 222169.27]], 'Stippel', 'Platanenlaan');
	addFinish([[152450.98, 221879.62], [152456.98, 221882.16], [152452.18, 221887.28], [152446.18, 221884.55]], 'Stippel', 'Witvenstraat');
	addFinish([[152650.57, 222124.61],[152622.97, 222165.00],[152629.10, 222169.27],[152656.56, 222129.01]], 'Stippel', 'Platanenlaan');
	//addFinish([[152622.71, 222165.14],[152601.91, 222195.66],[152608.18, 222199.93],[152629.10, 222169.27]], 'Stippel', 'Platanenlaan');
	addFinish([[152601.91, 222195.66],[152577.12, 222232.05],[152583.38, 222236.32],[152608.18, 222199.93]], 'Stippel', 'Platanenlaan');	
	//addFinish([[152569.18, 221945.65],[152562.72, 221955.19],[152568.05, 221958.52],[152575.11, 221948.41]], 'Stippel', 'Hooghuisstraat');
	addFinish([[152512.15, 222302.78],[152467.95, 222272.65],[152463.77, 222278.78],[152508.02, 222309.18]], 'Stippel', 'Dennenlaan');
	addFinish([[152556.82, 222261.56],[152531.10, 222299.21],[152537.39, 222303.59],[152563.07, 222265.90]], 'Stippel', 'Platanenlaan');
	addFinish([[152621.38, 222280.01],[152585.83, 222256.09],[152581.85, 222262.50],[152617.22, 222286.30]], 'Stippel', 'Kastanjelaan');
	addFinish([[152579.83, 222079.33],[152539.93, 222137.91],[152543.74, 222140.96],[152584.02, 222082.25]], 'Stippel', 'Berkenlaan');
	addFinish([[152511.57, 222179.23],[152478.91, 222226.89],[152482.98, 222229.81],[152515.51, 222181.90]], 'Stippel', 'Berkenlaan');
	addFinish([[152653.24, 222120.44],[152650.57, 222124.61],[152656.56, 222129.01],[152659.49, 222124.69]], 'Stippel', 'Platanenlaan');
	addFinish([[152656.00, 222115.77],[152653.24, 222120.44],[152659.49, 222124.69],[152662.50, 222119.69]], 'Stippel', 'Platanenlaan');
	addFinish([[152655.90, 222105.88],[152649.23, 222101.68],[152644.97, 222108.35],[152651.60, 222113.01]], 'Stippel', 'Wilgenlaan');
	addFinish([[152660.23, 222108.64],[152655.90, 222105.88],[152651.60, 222113.01],[152656.00, 222115.77]], 'Stippel', 'Wilgenlaan');
	addFinish([[152678.87, 222121.12],[152672.67, 222117.00],[152668.61, 222123.25],[152674.75, 222127.32]], 'Stippel', 'Wilgenlaan');
	addFinish([[152672.67, 222117.00],[152666.86, 222112.97],[152662.50, 222119.69],[152668.61, 222123.25]], 'Stippel', 'Wilgenlaan');
	addFinish([[152666.86, 222112.97],[152660.23, 222108.64],[152656.00, 222115.77],[152662.50, 222119.69]], 'Stippel', 'Wilgenlaan Platanenlaan');
	addFinish([[152608.58, 222074.62],[152602.18, 222069.71],[152598.13, 222075.67],[152604.58, 222080.22]], 'Stippel', 'Wilgenlaan');
	addFinish([[152599.91, 222054.10],[152596.59, 222058.76],[152600.96, 222061.68],[152603.91, 222057.16]], 'Stippel', 'Berkenlaan');
	addFinish([[152602.18, 222069.71],[152597.75, 222066.88],[152594.27, 222072.69],[152598.13, 222075.67]], 'Stippel', 'Wilgenlaan');
	addFinish([[152639.47, 221996.22],[152636.30, 222000.91],[152640.43, 222003.97],[152643.73, 221999.39]], 'Stippel', 'Berkenlaan');
	addFinish([[152644.79, 221987.40],[152639.47, 221996.22],[152643.73, 221999.39],[152649.43, 221990.78]], 'Stippel', 'Berkenlaan');
	addFinish([[152667.47, 221995.51],[152661.11, 221990.86],[152657.70, 221996.52],[152663.68, 222000.71]], 'Stippel', 'Witvenstraat');
	addFinish([[152661.11, 221990.86],[152653.21, 221985.44],[152649.43, 221990.78],[152657.70, 221996.52]], 'Stippel', 'Witvenstraat');
	addFinish([[152640.61, 221976.91],[152633.77, 221972.65],[152630.44, 221977.85],[152636.85, 221982.29]], 'Stippel', 'Witvenstraat');
	addFinish([[152648.10, 221981.97],[152640.61, 221976.91],[152636.85, 221982.29],[152644.79, 221987.40]], 'Stippel', 'Witvenstraat');
	addFinish([[152653.21, 221985.44],[152648.10, 221981.97],[152644.79, 221987.40],[152649.43, 221990.78]], 'Stippel', 'Witvenstraat');
	addFinish([[152578.55, 221930.54],[152577.09, 221933.05],[152582.04, 221936.44],[152583.75, 221933.47]], 'Stippel', 'Hooghuisstraat');
	addFinish([[152577.09, 221933.05],[152573.30, 221939.00],[152578.65, 221941.79],[152582.04, 221936.44]], 'Stippel', 'Hooghuisstraat');
	addFinish([[152565.52, 221937.07],[152563.22, 221935.94],[152561.35, 221939.27],[152563.96, 221940.50]], 'Stippel', 'Witvenstraat');
	addFinish([[152567.06, 221937.82],[152565.52, 221937.07],[152563.96, 221940.50],[152565.34, 221941.16]], 'Stippel', 'Witvenstraat');
	addFinish([[152588.98, 221947.59],[152585.91, 221945.66],[152583.09, 221951.70],[152586.31, 221953.32]], 'Stippel', 'Witvenstraat');
	addFinish([[152568.05, 221958.52],[152570.62, 221954.56],[152565.47, 221951.03],[152562.72, 221955.19]], 'Stippel', 'Hooghuisstraat');
	addFinish([[152570.62, 221954.56],[152571.94, 221952.68],[152566.40, 221949.15],[152565.47, 221951.03]], 'Stippel', 'Hooghuisstraat');
	addFinish([[152569.16, 221945.00],[152566.40, 221949.15],[152571.94, 221952.68],[152575.10, 221947.88]], 'Stippel', 'Hooghuisstraat');
	addFinish([[152585.91, 221945.66],[152584.80, 221944.91],[152581.68, 221951.19],[152583.09, 221951.70]], 'Stippel', 'Witvenstraat');
	addFinish([[152584.80, 221944.91],[152578.65, 221941.79],[152575.10, 221947.88],[152581.68, 221951.19]], 'Stippel', 'Witvenstraat');
	addFinish([[152573.30, 221939.00],[152567.96, 221936.32],[152564.65, 221942.75],[152569.16, 221945.00]], 'Stippel', 'Witvenstraat');
	addFinish([[152573.30, 221939.00],[152569.16, 221945.00],[152575.10, 221947.88],[152578.65, 221941.79]], 'Stippel', 'Witvenstraat Hooghuisstraat');
}
//alert(14);
function addZebra() {
	addFinish([[152561.49, 221846.57], [152566.69, 221850.03], [152562.69, 221857.36], [152558.02, 221854.03]], 'Zebra');
	addFinish([[152605.48, 221877.49], [152608.94, 221880.18], [152605.34, 221885.24], [152602.14, 221882.82]], 'Zebra');
	addFinish([[152468.71, 221887.76], [152471.64, 221889.62], [152468.98, 221894.81], [152465.31, 221893.28]], 'Zebra', 'Witvenstraat');
}
//alert(15);
function loadBanen(callback) {
	var straten = {};
	var stratenCount = 0;
	for (var i = 0; i < banen.length; i++) {
		var baan = banen[i];
		var type = baan[1];
		var name = baan[2];
		var coordinates = baan[0];
		var straat = straten[name];
		if (straat == null) {
			stratenCount++;
			straat = straten[name] = {
				type: type,
				name: name,
				coordinates: []
			}
		}
		straat.coordinates.push(coordinates);
	}
	var straatNames = [];
	var stratenAdded = 0;
	for (var straatName in straten) {
		straatNames.push(straatName);
		var straat = straten[straatName];
		storage.setJSON('straat:' + straatName, straat, function() {
			stratenAdded++;
			if (stratenCount == stratenAdded) {
				storage.setJSON('straten', straatNames, function() {
					if (callback) {
						callback();
					}
				});
			}
		});
	}
}
//alert(16)
function loadStraten() {
	storage.getJSON('straten', function(value) {
		if (value == null) {
			loadBanen();
		}
	});
}
//alert(17);
function addBaan() {
	storage.getJSON('straten', function(straten) {
		if (straten == null) {
			loadBanen(addBaan);
			//straten = JSON.parse(storage.getItem('straten'));
		} else {
			for (var i = 0; i < straten.length; i++) {
				$('<option/>').val(straten[i]).text(straten[i]).appendTo($('select#ddStraten'));
				storage.getJSON('straat:' + straten[i], function(straat) {
					for (var j = 0; j < straat.coordinates.length; j++) {
						addFinish(straat.coordinates[j], straat.type, straat.name);
					}
				});
			}
		}
	});
}
//alert(18);
function addVoetpad() {
	addFinish([[152558.06, 221853.99],[152555.37, 221854.67],[152563.47, 221859.98],[152562.92, 221857.41]], 'Voetpad', 'Markt 19');
	addFinish([[152555.37, 221854.67],[152551.26, 221859.94],[152560.29, 221862.27],[152563.47, 221859.98]], 'Voetpad', 'Markt 19');
	addFinish([[152555.37, 221854.67],[152546.37, 221857.42],[152546.05, 221858.47],[152551.26, 221859.94]], 'Voetpad', 'Markt 19');
	addFinish([[152545.68, 221830.33],[152544.84, 221831.64],[152560.30, 221842.73],[152561.53, 221840.96]], 'Voetpad', 'Markt 19');
	addFinish([[152549.22, 221850.75],[152547.39, 221853.56],[152550.85, 221855.92],[152555.08, 221854.58]], 'Voetpad', 'Markt');
	addFinish([[152537.42, 221842.95],[152535.77, 221845.56],[152547.39, 221853.56],[152549.22, 221850.75]], 'Voetpad', 'Markt Harlekijn');
	addFinish([[152545.31, 221830.21],[152540.66, 221827.12],[152540.05, 221828.08],[152544.57, 221831.51]], 'Voetpad', 'Markt t uveltje');
	addFinish([[152537.42, 221842.95],[152533.75, 221840.68],[152528.84, 221840.94],[152535.77, 221845.56]], 'Voetpad', 'Markt Harlekijn');
	addFinish([[152542.09, 221824.39],[152532.32, 221819.13],[152530.97, 221821.56],[152539.88, 221828.04]], 'Voetpad', 'Markt t Uveltje');
	addFinish([[152528.66, 221817.15],[152516.72, 221810.84],[152515.43, 221812.85],[152525.89, 221820.45]], 'Voetpad', 'Markt Belfius');
	addFinish([[152527.51, 221840.16],[152523.88, 221846.24],[152525.28, 221847.21],[152528.91, 221840.95]], 'Voetpad', 'Markt Harlekijn');
	addFinish([[152523.89, 221846.24],[152518.13, 221855.89],[152519.63, 221856.62],[152525.22, 221847.26]], 'Voetpad', 'Markt Harlekijn');
	addFinish([[152561.17, 221840.71],[152563.73, 221836.61],[152558.74, 221834.18],[152556.69, 221837.63]], 'Voetpad', 'Markt t Jupke');
	addFinish([[152557.79, 221833.96],[152541.35, 221824.50],[152540.25, 221826.92],[152555.96, 221837.27]], 'Voetpad', 'Markt t Uveltje');
	addFinish([[152569.75, 221845.51],[152561.57, 221841.00],[152560.41, 221842.60],[152561.47, 221843.16]], 'Voetpad', 'Markt t Jupke');
	addFinish([[152569.75, 221845.46],[152561.47, 221843.21],[152561.82, 221846.52],[152566.59, 221849.93]], 'Voetpad', 'Markt t Jupke');
	addFinish([[152569.85, 221845.31],[152568.19, 221847.67],[152570.10, 221848.63],[152571.45, 221846.27]], 'Voetpad', 'Markt t Jupke');
	addFinish([[152571.40, 221846.02],[152575.02, 221839.84],[152573.71, 221838.99],[152570.15, 221845.06]], 'Voetpad', 'Markt t Jupke');
	addFinish([[152575.29, 221867.88],[152573.67, 221870.32],[152580.15, 221874.09],[152581.24, 221871.85]], 'Voetpad', 'Markt');
	addFinish([[152584.85, 221874.32],[152581.24, 221871.85],[152580.15, 221874.09],[152583.58, 221876.22]], 'Voetpad', 'Markt');
	addFinish([[152544.87, 221855.50],[152545.41, 221856.58],[152546.93, 221854.33],[152545.76, 221853.66]], 'Voetpad', 'Markt');
	addFinish([[152542.89, 221855.01],[152544.73, 221855.36],[152545.58, 221853.66],[152544.01, 221852.49]], 'Voetpad', 'Markt');
	addFinish([[152543.07, 221852.04],[152541.77, 221855.50],[152542.53, 221855.36],[152543.79, 221852.40]], 'Voetpad', 'Markt');
	addFinish([[152547.39, 221853.56],[152535.77, 221845.56],[152534.73, 221846.95],[152546.83, 221854.24]], 'Voetpad', 'Markt');
	addFinish([[152535.77, 221845.56],[152528.84, 221840.94],[152527.82, 221842.82],[152534.73, 221846.95]], 'Voetpad', 'Markt');
	addFinish([[152564.27, 221860.58],[152563.47, 221859.98],[152560.29, 221862.27],[152564.11, 221864.50]], 'Voetpad', 'Markt');
	addFinish([[152569.14, 221863.79],[152564.27, 221860.58],[152564.11, 221864.50],[152568.00, 221866.90]], 'Voetpad', 'Markt');
	addFinish([[152575.29, 221867.88],[152569.14, 221863.79],[152568.00, 221866.90],[152573.67, 221870.32]], 'Voetpad', 'Markt');
	addFinish([[152590.38, 221877.79],[152584.85, 221874.32],[152583.58, 221876.22],[152589.38, 221879.65]], 'Voetpad', 'Markt');
	addFinish([[152597.59, 221882.51],[152590.38, 221877.79],[152589.38, 221879.65],[152596.60, 221884.13]], 'Voetpad', 'Markt');
	addFinish([[152604.74, 221871.67],[152596.97, 221866.42],[152595.99, 221868.04],[152603.53, 221873.53]], 'Voetpad', 'Markt');
	addFinish([[152596.97, 221866.42],[152591.48, 221862.71],[152590.73, 221864.27],[152595.99, 221868.04]], 'Voetpad', 'Markt');
	addFinish([[152600.92, 221884.66],[152597.59, 221882.51],[152596.60, 221884.13],[152600.07, 221886.13]], 'Voetpad', 'Markt');
	addFinish([[152607.92, 221873.81],[152604.74, 221871.67],[152603.53, 221873.53],[152606.69, 221875.86]], 'Voetpad', 'Markt');
	addFinish([[152604.96, 221884.99],[152602.05, 221882.87],[152600.92, 221884.66],[152603.91, 221886.52]], 'Voetpad', 'Markt');
	addFinish([[152603.91, 221886.52],[152600.92, 221884.66],[152600.07, 221886.13],[152603.59, 221888.39]], 'Voetpad', 'Markt');
	addFinish([[152605.80, 221887.70],[152603.73, 221886.63],[152603.59, 221888.39],[152604.80, 221889.15]], 'Voetpad', 'Markt');
	addFinish([[152591.48, 221862.71],[152587.96, 221860.42],[152587.18, 221861.78],[152590.73, 221864.27]], 'Voetpad', 'Markt');
	addFinish([[152587.96, 221860.42],[152582.50, 221856.82],[152581.80, 221857.87],[152587.18, 221861.78]], 'Voetpad', 'Markt');
	addFinish([[152518.15, 221855.88],[152512.19, 221865.75],[152514.29, 221865.89],[152519.61, 221856.66]], 'Voetpad', 'Frans Ooms Plein');
	addFinish([[152512.09, 221865.75],[152509.65, 221869.95],[152511.16, 221870.88],[152514.04, 221866.04]], 'Voetpad', 'Frans Ooms Plein');
	addFinish([[152509.45, 221870.00],[152506.86, 221874.40],[152507.11, 221877.42],[152511.06, 221871.07]], 'Voetpad', 'Frans Ooms Plein');
	addFinish([[152506.84, 221874.25],[152500.05, 221871.02],[152498.93, 221873.52],[152506.99, 221877.42]], 'Voetpad', 'Frans Ooms Plein');
	addFinish([[152499.94, 221871.02],[152486.94, 221864.87],[152486.21, 221867.11],[152498.96, 221873.27]], 'Voetpad', 'Frans Ooms Plein');
	addFinish([[152486.84, 221864.82],[152485.62, 221864.28],[152484.54, 221866.33],[152486.25, 221867.07]], 'Voetpad', 'Frans Ooms Plein');
	addFinish([[152479.60, 221861.54],[152478.43, 221863.30],[152484.34, 221866.28],[152485.46, 221864.23]], 'Voetpad', 'Frans Ooms Plein');
	addFinish([[152478.38, 221863.25],[152477.02, 221862.81],[152467.93, 221878.16],[152469.00, 221878.79]], 'Voetpad', 'Frans Ooms Plein');
	addFinish([[152479.89, 221833.40],[152474.32, 221842.54],[152476.47, 221843.71],[152481.65, 221834.77]], 'Voetpad', 'Frans Ooms Plein');
	addFinish([[152483.96, 221826.20],[152479.76, 221833.28],[152481.47, 221834.70],[152492.02, 221826.00]], 'Voetpad', 'Frans Ooms Plein');
	addFinish([[152487.96, 221822.91],[152484.00, 221825.99],[152491.67, 221825.94],[152490.45, 221824.08]], 'Voetpad', 'Frans Ooms Plein');
	addFinish([[152490.50, 221824.03],[152491.91, 221826.08],[152496.51, 221822.37],[152495.97, 221813.23]], 'Voetpad', 'Frans Ooms Plein');
	addFinish([[152484.81, 221805.52],[152484.02, 221807.20],[152495.57, 221813.03],[152496.35, 221811.24]], 'Voetpad', 'Kerkstraat');
	addFinish([[152489.40, 221796.22],[152488.95, 221797.67],[152500.72, 221803.84],[152501.06, 221802.38]], 'Voetpad', 'Kerkstraat');
	addFinish([[152500.66, 221802.16],[152500.33, 221804.06],[152515.01, 221812.47],[152516.35, 221810.45]], 'Voetpad', 'Kerkstraat');
	addFinish([[152574.52, 221933.14],[152572.14, 221936.76],[152572.26, 221938.55],[152575.40, 221933.72]], 'Voetpad', 'Hooghuisstraat');
	addFinish([[152564.56, 221948.13],[152560.75, 221954.07],[152562.62, 221955.20],[152566.50, 221949.18]], 'Voetpad', 'Hooghuisstraat');
	addFinish([[152573.45, 221953.79],[152571.60, 221952.48],[152567.79, 221958.42],[152569.80, 221959.69]], 'Voetpad', 'Hooghuisstraat');
	addFinish([[152584.86, 221920.44],[152583.23, 221919.51],[152576.76, 221929.56],[152578.36, 221930.56]], 'Voetpad', 'Hooghuisstraat');
	addFinish([[152609.39, 221893.50],[152604.71, 221900.92],[152606.44, 221902.28],[152611.38, 221894.77]], 'Voetpad', 'Hooghuisstraat');
	addFinish([[152603.59, 221888.39],[152598.08, 221896.57],[152599.50, 221897.42],[152604.89, 221889.14]], 'Voetpad', 'Hooghuisstraat');
	addFinish([[152598.08, 221896.57],[152595.77, 221899.96],[152597.24, 221900.93],[152599.50, 221897.42]], 'Voetpad', 'Hooghuisstraat');
	addFinish([[152604.71, 221900.92],[152601.90, 221905.15],[152603.72, 221906.27],[152606.44, 221902.28]], 'Voetpad', 'Hooghuisstraat');
	addFinish([[152568.45, 221934.88],[152567.74, 221936.27],[152572.26, 221938.55],[152572.14, 221936.76]], 'Voetpad', 'Witvenstraat');
	addFinish([[152495.51, 221913.67],[152493.46, 221918.01],[152498.53, 221920.92],[152500.76, 221916.52]], 'Voetpad', 'Witvenstraat');
	addFinish([[152495.17, 221913.62],[152493.17, 221917.95],[152481.42, 221912.19],[152483.65, 221908.03]], 'Voetpad', 'Witvenstraat');
	addFinish([[152483.24, 221907.86],[152472.18, 221902.15],[152470.07, 221906.32],[152481.07, 221911.96]], 'Voetpad', 'Witvenstraat');
	addFinish([[152473.93, 221899.47],[152472.47, 221902.05],[152506.10, 221918.41],[152508.12, 221916.17]], 'Voetpad', 'Witvenstraat');
	addFinish([[152513.72, 221905.29],[152479.87, 221888.82],[152477.97, 221892.07],[152512.38, 221909.33]], 'Voetpad', 'Witvenstraat');
	addFinish([[152472.00, 221902.24],[152462.80, 221897.43],[152459.25, 221901.48],[152469.91, 221906.42]], 'Voetpad', 'Witvenstraat');
	addFinish([[152474.02, 221899.31],[152472.35, 221898.55],[152470.40, 221901.27],[152472.28, 221902.03]], 'Voetpad', 'Witvenstraat');
	addFinish([[152472.28, 221898.48],[152471.23, 221896.53],[152468.38, 221900.15],[152470.26, 221901.13]], 'Voetpad', 'Witvenstraat');
	addFinish([[152471.23, 221896.39],[152465.38, 221893.25],[152462.80, 221897.29],[152468.38, 221900.15]], 'Voetpad', 'Witvenstraat');
	addFinish([[152479.67, 221888.79],[152475.42, 221887.47],[152474.23, 221890.46],[152477.86, 221892.07]], 'Voetpad', 'Witvenstraat');
	addFinish([[152475.42, 221887.12],[152471.93, 221885.93],[152468.45, 221887.61],[152474.23, 221890.25]], 'Voetpad', 'Witvenstraat');
	addFinish([[152500.92, 221916.29],[152498.82, 221920.89],[152505.86, 221924.37],[152507.89, 221919.84]], 'Voetpad', 'Witvenstraat');
	addFinish([[152507.82, 221919.84],[152505.73, 221924.23],[152509.07, 221926.04],[152511.79, 221921.79]], 'Voetpad', 'Witvenstraat');
	addFinish([[152505.86, 221924.51],[152501.96, 221932.04],[152504.05, 221933.29],[152508.86, 221926.39]], 'Voetpad', 'Witvenstraat');
	addFinish([[152509.98, 221915.59],[152508.03, 221916.22],[152506.07, 221918.52],[152508.65, 221919.98]], 'Voetpad', 'Witvenstraat');
	addFinish([[152509.98, 221915.45],[152508.79, 221920.26],[152511.23, 221921.31],[152514.09, 221917.47]], 'Voetpad', 'Witvenstraat');
	addFinish([[152513.88, 221917.33],[152511.23, 221921.37],[152513.25, 221922.28],[152514.72, 221920.12]], 'Voetpad', 'Witvenstraat');
	addFinish([[152515.97, 221916.98],[152514.09, 221917.54],[152514.86, 221920.19],[152515.76, 221920.68]], 'Voetpad', 'Witvenstraat');
	addFinish([[152516.04, 221916.98],[152515.90, 221920.61],[152523.36, 221924.23],[152524.61, 221921.03]], 'Voetpad', 'Witvenstraat');
	addFinish([[152524.60, 221921.04],[152523.34, 221924.25],[152532.40, 221928.84],[152534.42, 221926.06]], 'Voetpad', 'Witvenstraat');
	addFinish([[152513.58, 221905.08],[152512.33, 221909.12],[152512.82, 221911.49],[152514.98, 221906.19]], 'Voetpad', 'Witvenstraat');
	addFinish([[152514.84, 221905.98],[152512.54, 221911.21],[152514.21, 221912.40],[152516.23, 221906.96]], 'Voetpad', 'Witvenstraat');
	addFinish([[152516.37, 221906.61],[152514.35, 221912.33],[152515.47, 221912.19],[152518.18, 221907.59]], 'Voetpad', 'Witvenstraat');
	addFinish([[152518.18, 221907.80],[152515.47, 221912.12],[152529.48, 221919.09],[152531.43, 221914.63]], 'Voetpad', 'Witvenstraat');
	addFinish([[152568.45, 221934.88],[152564.77, 221932.94],[152563.19, 221935.90],[152567.01, 221937.77]], 'Voetpad', 'Witvenstraat');
	addFinish([[152565.29, 221941.16],[152561.31, 221939.17],[152559.17, 221942.86],[152563.34, 221945.19]], 'Voetpad', 'Witvenstraat');
	addFinish([[152564.54, 221942.80],[152563.43, 221945.06],[152565.80, 221946.08],[152569.05, 221944.87]], 'Voetpad', 'Witvenstraat');
	addFinish([[152578.36, 221930.56],[152576.76, 221929.56],[152574.52, 221933.14],[152575.40, 221933.72]], 'Voetpad', 'Witvenstraat');
	addFinish([[152564.57, 221933.01],[152558.39, 221929.56],[152556.76, 221932.80],[152563.07, 221935.77]], 'Voetpad', 'Witvenstraat');
	addFinish([[152561.04, 221939.24],[152555.13, 221936.20],[152553.36, 221939.65],[152559.14, 221942.67]], 'Voetpad', 'Witvenstraat');
	addFinish([[152621.37, 221897.35],[152614.03, 221892.83],[152613.35, 221894.41],[152620.62, 221898.65]], 'Voetpad', 'Molenstraat');
}
//alert(19);
function addParking() {
	addFinish([[152558.06, 221853.99],[152554.14, 221851.40],[152552.95, 221853.06],[152555.37, 221854.67]], 'Parking', 'Markt');
	addFinish([[152554.14, 221851.40],[152550.22, 221848.88],[152549.22, 221850.75],[152552.95, 221853.06]], 'Parking', 'Markt');
	addFinish([[152564.61, 221858.28],[152562.92, 221857.41],[152563.47, 221859.98],[152564.27, 221860.58]], 'Parking', 'Markt');
	addFinish([[152569.84, 221861.78],[152564.61, 221858.28],[152564.27, 221860.58],[152569.14, 221863.79]], 'Parking', 'Markt');
	addFinish([[152538.45, 221841.09],[152532.98, 221837.72],[152533.75, 221840.68],[152537.42, 221842.95]], 'Parking', 'Markt');
	addFinish([[152550.22, 221848.88],[152538.45, 221841.09],[152537.42, 221842.95],[152549.22, 221850.75]], 'Parking', 'Markt');
	addFinish([[152569.80, 221861.78],[152569.14, 221863.79],[152575.29, 221867.88],[152576.46, 221866.17]], 'Parking', 'Markt');
	addFinish([[152585.96, 221872.38],[152582.24, 221869.97],[152581.24, 221871.85],[152584.85, 221874.32]], 'Parking', 'Markt');
	addFinish([[152591.37, 221876.02],[152585.96, 221872.38],[152584.85, 221874.32],[152590.38, 221877.79]], 'Parking', 'Markt');
	addFinish([[152603.53, 221873.53],[152595.99, 221868.04],[152594.79, 221869.93],[152602.38, 221875.34]], 'Parking', 'Markt');
	addFinish([[152595.99, 221868.04],[152590.73, 221864.27],[152589.76, 221866.29],[152594.79, 221869.93]], 'Parking', 'Markt');
	addFinish([[152602.05, 221882.87],[152598.83, 221880.68],[152597.59, 221882.51],[152600.92, 221884.66]], 'Parking', 'Markt');
	addFinish([[152606.69, 221875.86],[152603.53, 221873.53],[152602.38, 221875.34],[152605.46, 221877.60]], 'Parking', 'Markt');
	addFinish([[152590.73, 221864.27],[152587.18, 221861.78],[152586.19, 221863.83],[152589.76, 221866.29]], 'Parking', 'Markt');
	addFinish([[152587.18, 221861.78],[152581.80, 221857.87],[152580.66, 221859.81],[152586.19, 221863.83]], 'Parking', 'Markt');
	addFinish([[152475.71, 221843.66],[152459.09, 221871.50],[152459.09, 221875.59],[152477.56, 221844.85]], 'Parking', 'Frans Ooms Plein');
	addFinish([[152576.46, 221866.17],[152575.29, 221867.88],[152581.24, 221871.85],[152582.24, 221869.97]], 'Parking', 'Markt');
	addFinish([[152598.83, 221880.68],[152591.37, 221876.02],[152590.38, 221877.79],[152597.59, 221882.51]], 'Parking', 'Markt');
}
//alert(20);
function addDal() {
	addFinish([[152569.40, 221864.38], [152581.37, 221872.11], [152580.15, 221874.29], [152568.02, 221866.96]], 'Dal');
	addFinish([[152568.02, 221867.23], [152560.15, 221862.29], [152561.79, 221859.29], [152569.41, 221864.35]], 'Dal');
	addFinish([[152556.02, 221852.03], [152562.69, 221857.36], [152560.15, 221862.29], [152551.09, 221860.02]], 'Dal');
	//addFinish([[152546.82, 221872.29],[152558.02, 221854.03],[152562.69, 221857.36],[152555.09, 221874.42]], 'Dal');
	addFinish([[152583.21, 221876.29], [152580.15, 221874.29], [152581.46, 221872.22], [152584.22, 221874.19]], 'Dal');
	addFinish([[152589.35, 221879.89], [152583.21, 221876.29], [152584.31, 221874.10], [152590.35, 221878.02]], 'Dal');
	addFinish([[152543.11, 221851.98], [152528.03, 221842.69], [152530.36, 221838.59], [152545.38, 221848.19]], 'Dal');
	addFinish([[152555.59, 221839.21], [152540.42, 221828.31], [152542.07, 221824.98], [152558.92, 221834.27]], 'Dal');
	addFinish([[152596.41, 221884.56], [152589.48, 221880.16], [152590.41, 221878.06], [152597.21, 221882.67]], 'Dal');
	addFinish([[152572.07, 221936.88], [152573.98, 221937.67], [152572.67, 221939.66], [152570.87, 221938.94]], 'Dal');
	addFinish([[152615.72, 221905.88], [152607.68, 221923.10], [152597.98, 221916.05], [152607.37, 221898.91]], 'Dal');
	addFinish([[152472.44, 221902.15], [152484.04, 221907.88], [152481.77, 221912.42], [152470.04, 221906.55]], 'Dal', 'Witvenstraat 63');
	addFinish([[152484.04, 221907.88], [152495.84, 221913.74], [152493.50, 221918.27], [152481.77, 221912.42]], 'Dal');
	addFinish([[152622.97, 222165.00],[152601.91, 222195.66],[152599.91, 222194.20],[152620.97, 222163.67]], 'Dal', 'Platanenlaan');
	addFinish([[152601.91, 222195.66],[152577.12, 222232.05],[152575.25, 222230.72],[152599.91, 222194.20]], 'Dal', 'Platanenlaan');
	addFinish([[152610.31, 222201.13],[152585.38, 222237.38],[152583.38, 222236.32],[152608.18, 222199.93]], 'Dal', 'Platanenlaan');
	addFinish([[152615.24, 222193.93],[152610.31, 222201.13],[152608.18, 222199.93],[152613.51, 222192.20]], 'Dal', 'Platanenlaan');
	addFinish([[152650.57, 222124.61],[152622.97, 222165.00],[152620.97, 222163.67],[152648.57, 222123.41]], 'Dal', 'Platanenlaan');
	addFinish([[152658.70, 222130.21],[152631.10, 222170.60],[152629.10, 222169.27],[152656.56, 222129.01]], 'Dal', 'Platanenlaan');
	addFinish([[152578.45, 221930.59],[152573.98, 221937.67],[152572.07, 221936.88],[152576.68, 221929.47]], 'Dal');
}
//alert(21);
function addFinishes(){
	addFinish([[152574.82, 221850.70], [152572.55, 221854.30], [152568.55, 221851.36], [152570.02, 221848.70]]);
	addFinish([[152530.20, 221835.63], [152509.77, 221869.89], [152504.03, 221867.36], [152524.80, 221832.70]]);
	addFinish([[152509.90, 221868.96], [152506.83, 221874.29], [152501.77, 221871.76], [152504.30, 221866.83]]);
	addFinish([[152529.63, 221835.77], [152524.43, 221833.10], [152529.76, 221823.77], [152537.23, 221828.70]]);
	addFinish([[152502.43, 221872.16], [152478.17, 221860.70], [152481.51, 221855.63], [152505.10, 221867.09]]);
	addFinish([[152481.51, 221855.76], [152478.31, 221860.30], [152471.37, 221856.83], [152474.04, 221852.43]]);
	addFinish([[152474.04, 221852.43], [152486.57, 221833.37], [152492.44, 221838.97], [152481.77, 221855.50]]);
	addFinish([[152577.44, 221846.55], [152574.82, 221850.70], [152570.02, 221848.70], [152572.85, 221843.96]]);
	addFinish([[152566.69, 221850.03], [152568.55, 221851.36], [152565.69, 221859.36], [152562.69, 221857.36]]);
	addFinish([[152589.08, 221827.92], [152577.48, 221846.58], [152572.82, 221843.78], [152583.48, 221825.52]], 'GeleBorduur');
	addFinish([[152515.30, 221912.21], [152563.22, 221935.94], [152561.35, 221939.27], [152516.23, 221916.94]]);
	addFinish([[152514.30, 221917.61], [152516.23, 221916.94], [152515.30, 221912.21], [152514.50, 221912.48]]);
	addFinish([[152512.90, 221911.61], [152514.50, 221912.48], [152514.30, 221917.61], [152510.30, 221915.61]]);
	addFinish([[152508.10, 221916.21], [152510.30, 221915.61], [152512.90, 221911.61], [152512.30, 221909.61]]);
	addFinish([[152477.84, 221892.62], [152512.30, 221909.61], [152508.10, 221916.21], [152473.97, 221899.41]]);
}
//alert(22);