function Sawmill(id, coordinates) {
    Building.call(this,
        id,
        "Sawmill",
        100,
        3,
        4,
        coordinates
    );
    this.lastCreateResourcesTime = new Date().getTime();
    this.createResourcesStamp = 0;
}

Sawmill.prototype = {
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

        //Produkcja drewna
        /* ilosc zaleznie od ilości pracowników
        przechowuję pieniądze i jak trzeba wypłacić ludziom hajs to wypłaca
        więc możliwość dawania pieniędzy zabierania drewna
        upgrade (więcej drewna)
        */
