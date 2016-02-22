const
	THREE = require('./threejs/three'),
	Views = require('./views'),
	rot = require('./rot').rot,

	$ = selector => document.querySelector(selector)

let fov = 45

//var tileIndex = null;

function setCamera(view) {
	const
		camera = Camera.get(),
		position = camera.position

	position.set(view.x, view.y, view.z)
	camera.lookAt({ x: 0, y: 0, z: 0 })
	camera.projectionMatrix.makePerspective(fov, window.innerWidth / window.innerHeight, 1, 10000)
	camera.rotation.y = rot(view.ry)
	if (view.top) {
		topView()
	}
}
/**
 * [Camera description]
 * @type {Object}
 */
const Camera = {
	_camera: null,
	/**
	 * [add description]
	 */
	add() {
		Camera._camera = new THREE.PerspectiveCamera(fov, window.innerWidth / window.innerHeight, 1, 10000)
	},
	/**
	 * [get description]
	 * @return {Camera} [description]
	 */
	get() {
		return Camera._camera
	},
	/**
	 * [init description]
	 * @return {null} [description]
	 */
	init() {
		fov = fov * 1.40
		setCamera(Views.views[Views.viewIndex])
	},
	setCamera,
	toggleViews() {
		let
			views = $('div#views')
		if (!views) {
	  	let
	  		index = 0,
	  		div = document.createElement('div'),
	  		ul = document.createElement('ul')
	  	Views.views.forEach(v => {
	  		let li = document.createElement('li')
	  		li.textContent = v.name
	  		li.addEventListener('click', function(event) {
	  			Views.set(index++)
	  		})
	  		//li.setAttribute()
	  		ul.appendChild(li)
	  		//`<li onclick="Views.set(${index++})"><span>${v.name}</span></li>`).join('')
	  	})
	  		//lis = Views.views.map(v => `<li onclick="Views.set(${index++})"><span>${v.name}</span></li>`).join('')
	  	div.setAttribute('id', 'views')
	  	div.appendChild(ul)
			//div.innerHTML = `<ul>${lis}</ul>`
			document.body.appendChild(div)
		} else {
			let style = views.style
			style.display = style.display === 'none' ? '' : 'none'
		}
	},
	toggleTiles() {
		$('canvas')
		if ($('div#tiles').length == 0) {
	  	var index = 0
	  	var div = $('<div id="tiles"/>')
	  	$('<ul>' +
				tileGroups.map(function(v) {
					var li = '<li tileIndex="' + index + '" class="tileAreaList"><span>' + v[4] + '</span></li>'
					index++
					return li
				}).join('\n') +
				'</ul>').appendTo(div)
				div.css({
					position: 'absolute',
					width: window.innerWidth / 1.5,
					height: window.innerHeight / 1.5,
					left: window.innerWidth / 6,
					top: window.innerHeight / 6,
					backgroundColor: 'gray',
					overflowY: 'scroll',
	        zIndex: 1000
				})
				div.appendTo(document.body)
				$('li.tileAreaList').click(function() {
					var tileIndex = this.getAttribute('tileIndex')
					$('div#tiles').toggle()
					addTiles(tileGroups[tileIndex])
				})
			} else {
				$('div#tiles').toggle()
			}
	}
}

module.exports = Camera