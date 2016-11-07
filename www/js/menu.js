Menu = function() {
    this.amount;
    this.indexNow = 0;
    this.options;
    this.amount;
    this.reloadString;

    this.prepareOptions();
    this.keypressed();
}

Menu.prototype = {
    prepareOptions: function() {
        if (window.location.href.indexOf("building.html") > -1) {
            this.building = city.getBuilding(window.location.href.split('=')[1]);
            this.options = ["Upgrade"];
            if(this.building.name == "Sawmill" || this.building.name == "Mill")
                this.options.push("Put gold");
            if(this.building.name != "Church")
                this.options.push("Take product");
            this.options.push("Return");
        } else if (window.location.href.indexOf("build.html") > -1) {
            this.options = "House Sawmill Mill Church Settlement Return".split(' ');
        } else if (window.location.href.indexOf("city.html") > -1) {
            this.options = ["Return"];
        }
        this.amount = this.options.length;
        this.reload();
    },
    reload: function() {
        if (window.location.href.indexOf("building.html") > -1)
            this.setStringForBuilding();
        if (window.location.href.indexOf("build.html") > -1)
            this.setStringForBuild();
        if (window.location.href.indexOf("city.html") > -1)
            this.setStringForCity();
    },
    setStringForBuild: function() {
        var menuString = "";
        menuString += "City Resources" + '\n';
        menuString += city.resources.toString() + '\n' + '\n';
        for (i in this.options) {
            if (i == this.indexNow)
                menuString += "<--" + this.options[i] + "-->" + '\n';
            else
                menuString += this.options[i] + '\n';
            if (this.options[i] != "Return")
                menuString += "cost: " + BuildingController.getCost(this.options[i]).toString() + '\n';
        }
        $("#mapArea").text(menuString);
    },
    setStringForBuilding: function() {
        var menuString = "";
        menuString += "City Resources" + '\n';
        menuString += city.resources.toString() + '\n' + '\n';

        menuString += this.building.name + '\n';
        menuString += "People: " + this.building.people.length + '\n';
        if(this.building.name != "Church"){
            menuString += "Resources" + '\n';
            menuString += this.building.resources.toString() + '\n';
        }
        menuString += "Level: " + this.building.level + '\n';
        for (i in this.options) {
            if (i == this.indexNow)
                menuString += "<--" + this.options[i] + "-->" + '\n';
            else
                menuString += this.options[i] + '\n';
        }
        $("#mapArea").text(menuString);
    },
    setStringForCity: function() {
        var menuString = "City" + '\n';
        menuString += "People: " + city.people.length + '\n';
        menuString += "People Health: " + city.getAveragePeopleHealth() + '\n';
        menuString += "Dead Amount: " + city.amountOfDeadPeople + '\n';
        menuString += "Resources" + '\n';
        menuString += city.resources.toString() + '\n';
        for (i in this.options) {
            if (i == this.indexNow)
                menuString += "<--" + this.options[i] + "-->" + '\n';
            else
                menuString += this.options[i] + '\n';
        }
        $("#mapArea").text(menuString);
    },
    keypressed: function() {
        $(document).keypress(function(e) {
            if (e.which == 13)
                pressFunction(menu.options[menu.indexNow]);
            if (e.which == 119) {
                menu.indexNow--;
                if (menu.indexNow < 0)
                    menu.indexNow = menu.amount - 1;
            } //up
            if (e.which == 115) {
                menu.indexNow++;
                if (menu.indexNow >= menu.amount)
                    menu.indexNow = 0;
            } //down
            menu.reload();
        });
    }
}

var menu = new Menu();
