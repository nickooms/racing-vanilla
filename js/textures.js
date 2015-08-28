var texture, texture2, texture3, textureRight, zebraTexture, zebraTexture2, stippelTexture, geleborduurTexture, busTexture, golfTexture, kinderKopTexture, voetpadTexture;
var imgTexture2, imgTexture;
var dalTexture;
var tile1Texture, tile2Texture, tile3Texture, tile4Texture, tile5Texture;
var tileTextures = [];
var maxAnisotropy;
function addTexture(fileName) {
	var newTexture = THREE.ImageUtils.loadTexture(fileName);
	newTexture.anisotropy = maxAnisotropy;
	return newTexture;
}
function addTextures() {
	maxAnisotropy = renderer.getMaxAnisotropy();
}