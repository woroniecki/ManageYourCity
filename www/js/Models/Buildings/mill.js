function Mill(id, coordinates) {
    Building.call(this,
        id,
        "Mill",
        100,
        3,
        coordinates
    );
}

Mill.prototype = {
    getProfit: function() {
        //zabiera dla domowników hajs procentowy zależnie od ustawionej daniny
        //myśle że jakiś timestamp by się przydał
    }
}

//Produkcja żywności
/* ilosc zaleznie od ilości pracowników + random pogodowy
placi ludziom więc trzeba zostawiać pieniądze
możliwośc dawania pieniędzy zbieranie żywności
upgrade ( więcej żwyności )
*/
