function House(id, coordinates) {
    Building.call(this,
        id,
        "House",
        100,
        3,
        2,
        coordinates
    );
}

House.prototype = {
    getProfit: function() {
        //zabiera dla domowników hajs procentowy zależnie od ustawionej daniny
        //myśle że jakiś timestamp by się przydał
    }
}

//Wyszukiwanie mieszkania dla ludzi
//Pobieranie listy mieszkańców domu
