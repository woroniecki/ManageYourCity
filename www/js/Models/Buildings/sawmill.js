function Sawmill(id, coordinates) {
    Building.call(this,
        id,
        "Sawmill",
        100,
        3,
        coordinates
    );
}

Sawmill.prototype = {
    isPossibleToGetSalary: function() {
        if (Resources.gold > 0) /*gold sawmill setting*/
            return true;
        return false;
    },
    getProfit: function() {
        //zabiera dla domowników hajs procentowy zależnie od ustawionej daniny
        //myśle że jakiś timestamp by się przydał
    }
}

//Produkcja drewna
/* ilosc zaleznie od ilości pracowników
przechowuję pieniądze i jak trzeba wypłacić ludziom hajs to wypłaca
więc możliwość dawania pieniędzy zabierania drewna
upgrade (więcej drewna)
*/
