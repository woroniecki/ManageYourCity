CityController = function() {
    this.intervalSave = window.setInterval(this.save.bind(this), 500);
    this.eventControlling();
}

CityController.prototype = {
    init: function() {
        this.city = city;
    },
    eventControlling: function() {
        if (window.location.href.indexOf("game") > -1) {
            $("body").keypress(function(e) {
                if (e.which == 13) //up
                    window.location = "build.html";
            });
        }
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
