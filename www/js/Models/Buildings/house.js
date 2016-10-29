function House(id, coordinates) {
    Building.call(this,
        id,
        "House",
        5,
        2,
        coordinates
    );
}

House.buildCost = function(){
    return new Resources(250, 0, 0);
}

House.upgradeCost = function(level) {
    return new Resources(100 + (level * 30), level * 3, 0);
}

House.prototype = {
    getProfit: function() {
        //zabiera dla domowników hajs procentowy zależnie od ustawionej daniny
        //myśle że jakiś timestamp by się przydał
    }
}

//Wyszukiwanie mieszkania dla ludzi
//Pobieranie listy mieszkańców domu
