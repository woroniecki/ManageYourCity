function Church(id, coordinates) {
    Building.call(this,
        id,
        "Church",
        10,
        4,
        coordinates
    );
}

Church.buildCost = function() {
    return new Resources(1000, 40, 0);
}

Church.upgradeCost = function(level) {
    return new Resources(250 + (level * 100), level * 10, 0);
}

Church.prototype = {
    update: function() {
        this.giveSalary();
    },
    takeProduct: function() {

    },
    giveSalary: function() {
        if (this.lastCreateResourcesTime + this.createResourcesStamp <= new Date().getTime()) {
            for (i in this.people){
                city.getBuilding(
                        city.getPerson(this.people[i]).homeId).resources.addRemove(5, 0, 0);
            }
             this.lastCreateResourcesTime += this.createResourcesStamp;   
        }
    },
    getProfit: function() {
        //zabiera dla domowników hajs procentowy zależnie od ustawionej daniny
        //myśle że jakiś timestamp by się przydał
    }
}

/*
nie trzeba hajsu
hajs pobiera od wiernych, więc jeżeli wierni nie mają hajsu
to też umiera
upgrade ( zasięg )
*/
