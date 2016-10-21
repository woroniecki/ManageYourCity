function Resources(){
	this.gold = 0;
	this.wood = 0;
	this.food = 0;
}

Resources.prototype = {
	take: function(gold, wood, food){
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
	}
}