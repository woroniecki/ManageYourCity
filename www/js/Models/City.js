function City() {
    this.houses = [];
    this.buildings = [];
    this.people = [];
    this.player = new Player();
    this.resources = new Resources(0, 0, 0);
    this.widthheight = [25, 60];

    this.lastArrivalNewPeopleTime = new Date().getTime();
    this.arrivalNewPeopleStamp = 0;

    this.lastGetMoneyTime = new Date().getTime();
    this.getMonetStamp = 0;
}

City.prototype = {
    update: function() {
        this.arrivalNewPeople();
        this.getMoney();
        this.updateBuildings();
        this.updatePeople();    
    },
    buildBuilding: function(name) {
        if (name == "House") {
            var building = new House(this.houses.length + this.buildings.length,
                this.player.coordinates);
            this.houses.push(building);
        } else {
            var building;
            if (name == "Sawmill")
                building = new Sawmill(this.houses.length + this.buildings.length,
                    this.player.coordinates);
            if (name == "Mill")
                building = new Mill(this.houses.length + this.buildings.length,
                    this.player.coordinates);
            if (name == "Church")
                building = new Church(this.houses.length + this.buildings.length,
                    this.player.coordinates);
            if (name == "Settlement")
                building = new Settlement(this.houses.length + this.buildings.length,
                    this.player.coordinates);
            this.buildings.push(building);
        }
        reload();
    },
    updateHouses: function() {

    },
    updateBuildings: function() {
        for (i in this.buildings) {
            this.buildings[i].update();
        }
    },
    updatePeople: function() {
        for (i in this.people) {
            this.people[i].update();
        }
    },
    getDailyProfit: function() {
        this.resources.addRemove(this.people.length * 30, 0, 0);
    },
    arrivalNewPeople: function() {
        if (this.amountFreePlacesInHouses() > 0) {
            if (this.people.length < 2) {
                this.createNewPerson();
            } else {
                if (this.lastArrivalNewPeopleTime + this.arrivalNewPeopleStamp > new Date().getTime()) {
                    if (Math.floor(Math.random() * 100) < this.getAveragePeopleHealth()) {
                        this.createNewPerson();
                    }
                    this.lastArrivalNewPeopleTimes += this.arrivalNewPeopleStamp;
                }
            }
        }
        s
    },
    getAveragePeopleHealth: function() {
        var averageHealth = 0;
        for (i in this.people) {
            averageHealth += this.people[i].getHealth();
        }
        if (this.people.length <= 0)
            return " - ";
        return averageHealth / this.people.length;
    },
    createNewPerson: function() {
        var housesWithFreePlaceIds = [];
        for (i in this.houses) {
            if (this.houses[i].getPeopleAmount() > 0)
                housesWithFreePlaceIds.push(i);
        }
        var sex = ["Male", "Female"];
        var houseI = housesWithFreePlaceIds[Math.floor(Math.random() * housesWithFreePlaceIds.length)];
        var newPerson = new Person(
            this.people.length + 1,
            sex[Math.floor(Math.random() * 1)],
            this.houses[houseI].id);
        this.houses[houseI].addPerson(newPerson.id);
        this.people.push(newPerson);
    },
    amountFreePlacesInHouses: function() {
        var amount = 0;
        for (i in this.houses)
            amount += this.houses[i].getPeopleAmount();
        return amount;
    },
    findJobFor: function(id) {
        var buildingWithPlacesToWorkIds = [];
        for (i in this.buildins) {
            if (this.buildins[i].getPeopleAmount() > 0)
                buildingWithPlacesToWorkIds.push(i);
        }
        if (!buildingWithPlacesToWorkIds.length > 0)
            return;
        var buildingI = buildingWithPlacesToWorkIds[Math.floor(Math.random() * buildingWithPlacesToWorkIds.length)]
        this.getPerson(id).hiredIn = this.buildings[buildingI];
        this.buildings[buildingI].addPerson(id);
    },
    getMoney: function() {
        if (this.lastGetMoneyTime + this.getMonetStamp > new Date.getTime()) {
            this.resources.addRemove(this.people.length * 50, 0, 0);
            this.lastGetMoneyTime += this.getMonetStamp;
        }
    },
    getPerson: function(id) {
        for (i in this.people)
            if (this.people[i].id == id)
                return this.people[i];
        return null;
    },
    getBuilding: function(id) {
        for (i in this.houses)
            if (this.houses[i].id == id)
                return this.houses[i];
        for (i in this.buildings)
            if (this.buildings[i].id == id)
                return this.buildings[i];
        return null;
    },
    getBuildingWherePlayerIs: function() {
        for (i in this.houses)
            if (this.houses[i].coordinates[0] == this.player.coordinates[0] &&
                this.houses[i].coordinates[1] == this.player.coordinates[1])
                return this.houses[i];
        for (i in this.buildings)
            if (this.buildings[i].coordinates[0] == this.player.coordinates[0] &&
                this.buildings[i].coordinates[1] == this.player.coordinates[1])
                return this.buildings[i];
        return null;
    },
    getMap: function() {
        var map = new Array(this.widthheight[0]);
        for (x = 0; x < map.length; x++) {
            map[x] = new Array(this.widthheight[1]);
        }
        for (x = 0; x < map.length; x++) {
            for (y = 0; y < map[0].length; y++) {
                map[x][y] = '.';
            }
        }

        for (i in this.houses)
            map[this.houses[i].coordinates[1]][this.houses[i].coordinates[0]] = 'H';

        for (i in this.buildings) {
            var char_ = this.buildings[i].name[0];
            if (this.buildings[i].name == "Settlement")
                char_ = 'O';
            map[this.buildings[i].coordinates[1]][this.buildings[i].coordinates[0]] = char_;
        }

        map[this.player.coordinates[1]][this.player.coordinates[0]] = 'P';

        var mapstring = "";
        for (x = 0; x < map.length; x++) {
            for (y = 0; y < map[0].length; y++) {
                mapstring += map[x][y];
            }
            mapstring += "\n";
        }
        return mapstring;
    }
}
