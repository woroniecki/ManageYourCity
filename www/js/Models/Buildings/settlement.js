function Settlement(id, coordinates) {
    Building.call(this,
    	id,
        "Settlement",
        100,
        3,
        5,
        coordinates
    );
}

Settlement.prototype = {
    getProfit: function() {
        //zabiera dla domowników hajs procentowy zależnie od ustawionej daniny
        //myśle że jakiś timestamp by się przydał
    }
}

/*
przechowuję żywność dla ludzi wokolo,
zbiera pieniądze od ludzi wokoło
upgrade ( zasięg, pojemność )*/
