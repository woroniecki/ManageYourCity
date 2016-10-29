function Resources(gold, wood, food){
	this.gold = gold;
	this.wood = wood;
	this.food = food;
}

Resources.prototype = {
	addRemove: function(gold, wood, food){
		if(this.gold + gold < 0)
			return false;
		if(this.wood + wood < 0)
			return false;
		if(this.food + food < 0)
			return false;
		this.gold += gold;
		this.wood += wood;
		this.food += food;
		return true;
	},
	isEnough: function(resources){
		if(resources.gold >= this.gold &&
			resources.wood >= this.wood &&
			resources.food >= this.food)
			return true;
		return false;
	},
	toString: function(){
		return "g: " + this.gold + " w: " + this.wood + " f: " + this.food;
	}
}