function Player() {
	this.coordinates = [15,15];
}

Player.prototype = {
	move: function(x, y){
		this.coordinates[0] += x;
		this.coordinates[1] += y;
		if(this.coordinates[0] < 0)
			this.coordinates[0] = 0;
		if(this.coordinates[0] >= city.widthheight[1])
			this.coordinates[0] = city.widthheight[1] - 1;
		if(this.coordinates[1] < 0)
			this.coordinates[1] = 0;
		if(this.coordinates[1] >= city.widthheight[0])
			this.coordinates[1] = city.widthheight[0] - 1;
	}
}