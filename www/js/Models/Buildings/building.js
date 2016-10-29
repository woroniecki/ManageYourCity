function Building(id, name, maxlevel, maxPeople, coordinates, upgradeStamp) {
    this.id = id;
    this.name = name;
    this.level = 1;
    this.maxlevel = maxlevel;
    this.people = [];
    this.maxPeople = maxPeople;
    this.coordinates = coordinates;
    this.resources = new Resources(0,0,0);

    this.lastCreateResourcesTime = new Date().getTime();
    this.createResourcesStamp = 12 * time;

    this.upgrade = function() {
        if(this.level >= this.maxlevel)
            return;
        if(city.takeUpgradeBuildingCost(BuildingController.getUpgradeCost(this.name, this.level))){
            this.level = this.level + 1;
            this.maxPeople = this.maxPeople + 1;
        }
    };
    this.getPeopleAmount = function() {
        return poeple.length();
    };
    this.getUpgradeCost = function() {
        if (this.level < this.maxlevel)
            return (this.level + 1) * cost;
    };
    this.getPeopleAmount = function() {
        return (this.maxPeople - this.people.length);
    };
    this.getCost = function() {
        return this.cost;
    };
    this.addPerson = function(id) {
    	this.people.push(id);
    };
    this.deletePerson = function(id){
        for(i in this.people){
            if(this.people[i] == id){
                this.people.splice(i, 1);
                return true;
            }
        }
        return false;
    };
    this.putGold = function(amount){
        if(city.resources.gold >= amount){
            this.resources.addRemove(amount,0,0);
            city.resources.addRemove(-amount,0,0);
        }
    };
}

Building.prototype = {

}
/*
Szymon kłos - znajomość języków Java, Python. Wiedza na temat najnowszych technologii oraz trendów w dziedzinie programowania.
Doświadczenie w pracy w grupie. Świetna komunikatywność, oraz sposób przekazywania wiedzy w zrozumiały sposób.
Umiejętności te pozwolą na tworzenie kursów zrozumiałych dla wszystkich oraz znakomitą pomoc podczas lekcji online z klientami. 
*/