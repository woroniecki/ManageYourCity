function Building(id, name, cost, maxlevel, maxPeople, coordinates) {
    this.id = id;
    this.name = name;
    this.cost = cost;
    this.level = 1;
    this.maxlevel = maxlevel;
    this.people = [];
    this.maxPoeple = maxPeople;
    this.coordinates = coordinates;
    this.resources = new Resources();
    this.update = function() {

    };
    this.updateUpgrade = function() {
        //jeśli zupgradowało
        //zwiekszyc przyrost ale to w dziedziczeniu i lb miejsc napewno
    };
    this.getPeopleAmount = function() {
        return poeple.length();
    };
    this.getUpgradeCost = function() {
        if (this.level < this.maxlevel)
            return (this.level + 1) * cost;
    };
    this.getPeopleAmount = function() {
        return (this.maxPoeple - this.people.length);
    };
    this.getCost = function() {
        return this.cost;
    };
    this.addPerson = function(id) {
    	this.people.push(id);
    };
    this.createResources = function(){

    };
}

Building.prototype = {

}
