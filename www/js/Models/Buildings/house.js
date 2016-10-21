function House(id, coordinates) {
    Building.call(this,
        id,
        "House",
        100,
        3,
        coordinates
    );
    this.maxPeople = 2;
}

House.prototype = {
    getProfit: function() {
        //zabiera dla domowników hajs procentowy zależnie od ustawionej daniny
        //myśle że jakiś timestamp by się przydał
    }
}

//Wyszukiwanie mieszkania dla ludzi
//Pobieranie listy mieszkańców domu
