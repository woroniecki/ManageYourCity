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
            var html = "<h1>" + this.building.name + "</h1>";

            if (this.building.name != "Church")
                html += Menu.createResourcesLine(this.building.resources);

            if (this.building.name != "House")
                html += Menu.textLineWithValue("Workers amount", "img/population.png", "workersamount", this.building.people.length);
            else
                html += Menu.textLineWithValue("People amount", "img/population.png", "workersamount", this.building.people.length);

            html += Menu.textLineWithValue("Level: ", "img/level.png", "level", this.building.level);

            html += Menu.createButtonResourcesLine("Upgrade", BuildingController.getUpgradeCost(this.building.name, this.building.level));

            if (!(this.building.name == "House" || this.building.name == "Church" || this.building.name == "City Hall"))
                html += Menu.putGoldLine();

            if (this.building.name == "Church")
                html += Menu.createReturnButtonLine();
            else
                html += Menu.collectReturnLine();
            document.getElementById("app").innerHTML = html;

        } else if (window.location.href.indexOf("build.html") > -1) {
            this.options = ["House", "Sawmill", "Mill", "Church", "City Hall"];
            var html = "<h1>Build</h1>";
            html += Menu.createButtonResourcesLine("House", BuildingController.getCost("House"));
            html += Menu.createButtonResourcesLine("Sawmill", BuildingController.getCost("Sawmill"));
            html += Menu.createButtonResourcesLine("Mill", BuildingController.getCost("Mill"));
            html += Menu.createButtonResourcesLine("Church", BuildingController.getCost("Church"));
            html += Menu.createButtonResourcesLine("City Hall", BuildingController.getCost("City Hall"));
            html += Menu.createReturnButtonLine();
            document.getElementById("app").innerHTML = html;
        } else if (window.location.href.indexOf("city.html") > -1) {

        }
        this.reload();
    },
    reload: function() {
        if (window.location.href.indexOf("building.html") > -1)
            this.setStringForBuilding();
        if (window.location.href.indexOf("build.html") > -1)
            this.setStringForBuild();
        if (window.location.href.indexOf("city.html") > -1)
            this.setStringForCity();
        if (window.location.href.indexOf("workers.html") > -1)
            this.setStringForWorkers();
    },
    setStringForBuild: function() {
        if (city.isBuildingClose(city.player.coordinates)) {
            for (i in this.options) {
                $("#" + this.options[i].replace(/ /g, '')).addClass('red').removeClass('yellow');
            }
            return;
        }
        for (i in this.options) {
            if (!BuildingController.getCost(this.options[i]).isEnough(city.resources)) {
                $("#" + this.options[i].replace(/ /g, '')).addClass('red').removeClass('yellow');
            } else {

                $("#" + this.options[i].replace(/ /g, '')).addClass('yellow').removeClass('red');
            }
        }
    },
    setStringForWorkers: function() {
        var workers = city.getWorkersAmount();
        for (key in workers){
            $("#" + key.replace(/ /g, '')).text(workers[key]);
        }
    },
    setStringForBuilding: function() {
        $("#name").text(this.building.name);
        $("#goldb").val(this.building.resources.gold);
        $("#woodb").val(this.building.resources.wood);
        $("#foodb").val(this.building.resources.food);
        $("#workersamount").text(this.building.people.length);
        $("#level").text(this.building.level);

        var inRange = city.isInRange(city.player.coordinates, this.building.coordinates, range);
        //Upgrade
        if (!BuildingController.getUpgradeCost(this.building.name, this.building.level).isEnough(city.resources) || !inRange) {
            $("#Upgrade").addClass('red').removeClass('yellow');
        } else {
            $("#Upgrade").addClass('yellow').removeClass('red');
        }
        var updateres = BuildingController.getUpgradeCost(this.building.name, this.building.level);
        $("#gold").val(updateres.gold);
        $("#wood").val(updateres.wood);
        $("#food").val(updateres.food);

        //Putgold
        if (!inRange) {
            $("#Putgold").addClass('red').removeClass('yellow');
        } else {
            $("#Putgold").addClass('yellow').removeClass('red');
        }
        //Collect
        if (!inRange) {
            $("#collect").addClass('red').removeClass('yellow');
        } else {
            $("#collect").addClass('yellow').removeClass('red');
        }
    },
    setStringForCity: function() {
        $("#peopleamount").text(city.people.length);
        $("#avreagehealth").text(city.getAveragePeopleHealth());
        $("#death").text(city.amountOfDeadPeople);
        $("#gold").val(city.resources.gold);
        $("#wood").val(city.resources.wood);
        $("#food").val(city.resources.food);
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

Menu.createButtonResourcesLine = function(text, resources) {
    var html = '<div class="line" style="display: flex; align-items: center;';
    html += 'justify-content: center;">';
    html += '<button id="' + text.replace(/ /g, '') + '" class="action-button shadow animate yellow" onclick="pressFunction(' + "'" + text + "'" + ')"';
    html += 'type="button">' + text + '</button>';
    html += '<div style="float: left;"><img id="navimg" style="margin: -1px 5px 0px 5px;" src="img/gold.png">';
    html += '<br/>';
    html += '<input id="gold" class="input" readonly type="text" name="gold" value="' + resources.gold + '">';
    html += '</div>';
    html += '<div style="float: left;"><img id="navimg" style="margin: -1px 5px 0px 5px;" src="img/wood.png">';
    html += '<br/>';
    html += '<input id="wood" class="input" readonly type="text" name="wood" value="' + resources.wood + '">';
    html += '</div>';
    html += '<div style="float: left;"><img id="navimg" style="margin: -1px 5px 0px 5px;" src="img/food.png">';
    html += '<br/>';
    html += '<input id="food" class="input" readonly type="text" name="food" value="' + resources.food + '">';
    html += '</div>';
    html += '</div>';
    return html;
}

Menu.createResourcesLine = function(resources) {
    var html = '<div id="resources" class="line" style="display: flex;';
    html += 'align-items: center;';
    html += 'justify-content: center;">';
    html += '         <div style="float: left;"><img id="navimg" style="margin: -1px 5px 0px 5px;" src="img/gold.png">';
    html += '            <br/>';
    html += '            <input class="input" id="goldb" readonly type="text" name="gold" value="' + resources.gold + '">';
    html += '        </div>';
    html += '        <div style="float: left;"><img id="navimg" style="margin: -1px 5px 0px 5px;" src="img/wood.png">';
    html += '            <br/>';
    html += '            <input class="input" id="woodb" readonly type="text" name="wood" value="' + resources.wood + '">';
    html += '        </div>';
    html += '       <div style="float: left;"><img id="navimg" style="margin: -1px 5px 0px 5px;" src="img/food.png">';
    html += '           <br/>';
    html += '           <input class="input" id="foodb" readonly type="text" name="food" value="' + resources.food + '">';
    html += '       </div>';
    html += '   </div>';
    return html;
}

Menu.textLineWithValue = function(text, icon, id, value) {
    var html = '<div class="line" style="display: flex;';
    html += 'align-items: center;';
    html += 'justify-content: center;">';
    html += '        <img id="navimg" style="margin: 0px 10px 0px 0px;" src="' + icon + '">';
    html += '        <h1 id="workersText" style="float: left;">' + text + '</h1><h1 id="' + id + '" style="margin:0px 5px;" >' + value + '</h1>';
    html += '    </div>';
    return html;
}

Menu.putGoldLine = function() {
    var html = '<div id="putgold" class="line" style="display: flex;';
    html += 'align-items: center;';
    html += 'justify-content: center;">';
    html += '       <button class="action-button shadow animate yellow" type="button"';
    html += '       onclick="pressFunction(' + "'" + "Put gold" + "'" + ')" id="Putgold">Put gold</button>';
    html += '       <div style="float: left;"><img id="navimg" style="margin: -1px 5px 0px 5px;" src="img/gold.png">';
    html += '           <br/>';
    html += '           <input class="input" id="goldp" readonly type="text" name="gold" value="100">';
    html += '       </div>';
    html += '       <input id="rangeinput" type="range" min="1" max="20" value="10" id="fader">';
    html += '   </div>';
    return html;
}
Menu.collectReturnLine = function() {
    var html = '<div class="line" style="display: flex;';
    html += 'align-items: center;';
    html += 'justify-content: center;">';
    html += '       <button id="collect" class="action-button shadow animate yellow" type="button"';
    html += '       onclick="pressFunction(' + "'" + "Take product" + "'" + ')" id="Collect">Collect</button>';
    html += '       <button class="action-button shadow animate yellow" type="button"';
    html += '       onclick="pressFunction(' + "'" + "Return" + "'" + ')">Return</button>';
    html += '   </div>';
    return html;
}

Menu.createReturnButtonLine = function() {
    var html = '<div class="line" style="display: flex;';
    html += 'align-items: center;';
    html += 'justify-content: center;';
    html += 'margin-top: 20px">';
    html += '       <button class="action-button shadow animate yellow" type="button"';
    html += '      onclick="pressFunction(';
    html += "'" + 'Return' + "'" + ')">Return</button>';
    html += '   </div>';
    return html;
}

var menu = new Menu();
