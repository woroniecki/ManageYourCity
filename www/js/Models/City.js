function City() {
    this.houses = [];
    this.buildings = [];
    this.people = [];
    this.player = new Player();
    this.resources = new Resources();
    this.widthheight = [25, 60];
}

City.prototype = {
    update: function() {

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

    },
    updatePeople: function() {

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

        for(i in this.houses)
            map[this.houses[i].coordinates[1]][this.houses[i].coordinates[0]] = 'H';

        for(i in this.buildings){
            var char_ = this.buildings[i].name[0];
            if(this.buildings[i].name == "Settlement")
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
