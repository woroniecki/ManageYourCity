function Sawmill(id, coordinates) {
    Building.call(this,
        id,
        "Sawmill",
        8,
        4,
        coordinates
    );
}

Sawmill.buildCost = function() {
    return new Resources(500, 0, 0);
}

Sawmill.upgradeCost = function(level) {
    return new Resources(250 + (level * 30), level * 5, 0);
}

Sawmill.prototype = {
    update: function() {
        this.createResources();
    },
    takeProduct: function() {
        city.resources.addRemove(0, this.resources.wood, 0);
        this.resources.addRemove(0, -this.resources.wood, 0);
    },
    createResources: function() {
        if (this.lastCreateResourcesTime + this.createResourcesStamp <= new Date().getTime()) {
            var i = this.people.length;
            while (i--) {
                if (i < 0)
                    break;
                if (this.resources.gold >= 10) {
                    this.resources.addRemove(-10, 2, 0);
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

//Produkcja drewna
/* ilosc zaleznie od ilości pracowników
przechowuję pieniądze i jak trzeba wypłacić ludziom hajs to wypłaca
więc możliwość dawania pieniędzy zabierania drewna
upgrade (więcej drewna)
*/
