function Building(id, name, cost, maxlevel, coordinates) {
  this.id = id;
  this.name = name;
  this.cost = cost;
  this.level = 1;
  this.maxlevel = maxlevel;
  this.people = [];
  this.maxPoeple = 0;
  this.coordinates = coordinates;
  this.resources = new Resources();
}

Building.prototype = {
	update: function(){

	},
	updateUpgrade: function(){
		//jeśli zupgradowało
		//zwiekszyc przyrost ale to w dziedziczeniu i lb miejsc napewno
	},
	getPeopleAmount: function(){
		return poeple.length();
	},
	getUpgradeCost: function(){
		if(this.level < this.maxlevel)
			return (this.level + 1) * cost;
	},
	getCost: function() {
		return this.cost;
    }
}