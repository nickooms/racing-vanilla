'use strict'

const Moving = {
	_moving: false,
	get() {
		return Moving._moving
	},
	set(moving) {
		Moving._moving = moving
	}
}

module.exports = Moving