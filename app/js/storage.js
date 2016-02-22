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

module.exports = storage;