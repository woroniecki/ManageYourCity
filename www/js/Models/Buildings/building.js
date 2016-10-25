function Building(id, name, cost, maxlevel, maxPeople, coordinates) {
    this.id = id;
    this.name = name;
    this.cost = cost;
    this.level = 1;
    this.maxlevel = maxlevel;
    this.people = [];
    this.maxPoeple = maxPeople;
    this.coordinates = coordinates;
    this.resources = new Resources(0,0,0);
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
/*
Szymon kłos - znajomość języków Java, Python. Wiedza na temat najnowszych technologii oraz trendów w dziedzinie programowania.
Doświadczenie w pracy w grupie. Świetna komunikatywność, oraz sposób przekazywania wiedzy w zrozumiały sposób.
Umiejętności te pozwolą na tworzenie kursów zrozumiałych dla wszystkich oraz znakomitą pomoc podczas lekcji online z klientami. 
*/