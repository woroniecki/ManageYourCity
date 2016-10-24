CityController = function() {
    this.intervalSave = window.setInterval(this.save.bind(this), 500);
}

CityController.prototype = {
    init: function() {
        this.city = city;
    },
    dehydrate: function(city) {
        this.city.player = playerController.dehydrate(city.player);
        this.city.houses = [];
        for (i in city.houses) {
            this.city.houses.push(HouseController.dehydrate(city.houses[i]));
        }
        this.city.buildings = [];
        for (i in city.buildings) {
            if (city.buildings[i].name == "Mill")
                this.city.buildings.push(MillController.dehydrate(city.buildings[i]));
            if (city.buildings[i].name == "Sawmill")
                this.city.buildings.push(SawmillController.dehydrate(city.buildings[i]));
            if (city.buildings[i].name == "Settlement")
                this.city.buildings.push(SettlementController.dehydrate(city.buildings[i]));
            if (city.buildings[i].name == "Church")
                this.city.buildings.push(ChurchController.dehydrate(city.buildings[i]));
        }
        this.city.people = [];
        for (i in city.people) {
            this.city.people.push(PersonController.dehydrate(city.people[i]));
        }
        this.city.resources = ResourcesController.dehydrate(city.resources);
        console.log(city);
        reload();
    },
    save: function() {
        localStorage.setItem("game", this.hydrate());
    },
    hydrate: function() {
        return JSON.stringify(city);
    }
}

cityController = new CityController();
