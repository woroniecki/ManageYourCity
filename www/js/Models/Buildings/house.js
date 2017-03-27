function House(id, coordinates) {
    Building.call(this,
        id,
        "House",
        2,
        coordinates
    );
}

House.buildCost = function(){
    return new Resources(250, 0, 0);
}

House.upgradeCost = function(level) {
    return new Resources(50, 2, 0);
}

House.prototype = {
    takeProduct: function() {
        city.resources.addRemove(this.resources.gold, 0, 0);
        this.resources.addRemove(-this.resources.gold, 0, 0);
    }
}

//Wyszukiwanie mieszkania dla ludzi
//Pobieranie listy mieszkańców domu
