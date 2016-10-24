function Church(id, coordinates) {
    Building.call(this,
        id,
        "Church",
        100,
        3,
        4,
        coordinates
    );
}

Church.prototype = {
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
