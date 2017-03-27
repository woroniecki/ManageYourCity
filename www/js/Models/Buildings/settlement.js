function Settlement(id, coordinates) {
    Building.call(this,
        id,
        "City Hall",
        5,
        coordinates
    );
}

Settlement.buildCost = function() {
    return new Resources(1500, 70, 0);
}

Settlement.upgradeCost = function(level) {
    return new Resources(400, 20, 0);
}

Settlement.prototype = {
    update: function() {
        this.collectTaxes();
    },
    takeProduct: function() {
        city.resources.addRemove(this.resources.gold, 0, 0);
        this.resources.addRemove(-this.resources.gold, 0, 0);
    },
    collectTaxes: function() {
        if (this.lastCreateResourcesTime + this.createResourcesStamp <= new Date().getTime()) {
            for (i in city.houses)
                if (city.isInRange(
                        this.coordinates,
                        city.houses[i].coordinates,
                        range + this.people.length * rangePerPerson)) {
                    this.resources.addRemove(city.houses[i].resources.gold, 0, 0);
                    city.houses[i].resources.addRemove(-city.houses[i].resources.gold, 0, 0);
                }
            for (i in this.people)
                city.getBuilding(
                    city.getPerson(this.people[i]).homeId).resources.addRemove(5, 0, 0);
            this.lastCreateResourcesTime += this.createResourcesStamp;
        }
    },
    getProfit: function() {
        //zabiera dla domowników hajs procentowy zależnie od ustawionej daniny
        //myśle że jakiś timestamp by się przydał
    }
}

/*
przechowuję żywność dla ludzi wokolo,
zbiera pieniądze od ludzi wokoło
upgrade ( zasięg, pojemność )*/
