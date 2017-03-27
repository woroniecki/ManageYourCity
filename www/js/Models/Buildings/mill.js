function Mill(id, coordinates) {
    Building.call(this,
        id,
        "Mill",
        3,
        coordinates
    );
    
}

Mill.buildCost = function() {
    return new Resources(500, 15, 0);
}

Mill.upgradeCost = function(level) {
    return new Resources(125, 5, 0);
}

Mill.prototype = {
    update: function() {
        this.createResources();
    },
    takeProduct: function() {
        city.resources.addRemove(0, 0, this.resources.food);
        this.resources.addRemove(0, 0, -this.resources.food);
    },
    createResources: function() {
        if (this.lastCreateResourcesTime + this.createResourcesStamp <= new Date().getTime()) {
            var i = this.people.length;
            while (i--) {
                if (i < 0)
                    break;
                if (this.resources.gold >= 10) {
                    this.resources.addRemove(-10, 0, 25);
                    city.getBuilding(
                        city.getPerson(this.people[i]).homeId).resources.addRemove(5, 0, 0);
                } else {
                    city.getPerson(this.people[i]).workResignation();
                    this.people.splice(i, 1);
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
