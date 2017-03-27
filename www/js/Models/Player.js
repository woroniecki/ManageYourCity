function Player() {
	this.coordinates = [0,0];
}

Player.prototype = {
	move: function(latLng, time){
		if (window.location.href.indexOf("game") > -1){
			playerMarker.moveTo(latLng, time);
			playerMarker.start();
		}
		this.coordinates = latLng;
	}
}