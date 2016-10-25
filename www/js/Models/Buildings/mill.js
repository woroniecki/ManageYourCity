function Mill(id, coordinates) {
    Building.call(this,
        id,
        "Mill",
        100,
        3,
        3,
        coordinates
    );
    this.lastCreateResourcesTime = new Date().getTime();
    this.createResourcesStamp = 0;
}

Mill.prototype = {
    update: function() {
        this.createResources();
    },
    createResources: function() {
        if (this.lastCreateResourcesTime + this.createResourcesStamp > new Date().getTime()) {
            for (i in this.people) {
                if (this.resources.gold > 10) {
                    this.resources.gold.addRemove(-10, 3, 0);
                    city.getPerson(this.people[i]).resources.addRemove(5, 0, 0);
                } else {
                    city.getPerson(this.people[i]).workResignation();
                    this.people.splice(i, 1);
                    i--;
                }
            }
            this.lastCreateResourcesTime += this.createResourcesStamp;
        }
    }
}

//Produkcja żywności
/* ilosc zaleznie od ilości pracowników + random pogodowy
placi ludziom więc trzeba zostawiać pieniądze
możliwośc dawania pieniędzy zbieranie żywności
upgrade ( więcej żwyności )
*/
