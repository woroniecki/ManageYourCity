function Mill(id, coordinates) {
    Building.call(this,
        id,
        "Mill",
        100,
        3,
        3,
        coordinates
    );
}

Mill.prototype = {
    createResources: function() {
        for (i in this.people) {
            if (this.resources.gold > 10) {
                this.resources.gold.addRemove(-10, 0, 5);
                city.getPerson(this.people[i]);
            }
        }
    }
}

//Produkcja żywności
/* ilosc zaleznie od ilości pracowników + random pogodowy
placi ludziom więc trzeba zostawiać pieniądze
możliwośc dawania pieniędzy zbieranie żywności
upgrade ( więcej żwyności )
*/
