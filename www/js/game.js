var blackosmUrl = 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
    blackosmAttrib = '',
    blackosm = L.tileLayer(blackosmUrl, {
        maxZoom: 19
    });

var mapDefault = [52.2318, 21.0060, 16, true];
if (localStorage.getItem("mapDefault")) {
    mapDefault = JSON.parse(localStorage.getItem("mapDefault"));
}

var map = L.map('map', {
        rotate: true
    })
    .setView([mapDefault[0], mapDefault[1]], mapDefault[2])
    .addLayer(blackosm);

//MAP ELEMENTS
var playerIcon = L.icon({
    iconUrl: 'img/player.png',
    iconAnchor: [7, 13]
});

var houseIcon = L.icon({
    iconUrl: 'img/house.png',
    iconAnchor: [20, 20]
});

var sawmillIcon = L.icon({
    iconUrl: 'img/sawmill.png',
    iconAnchor: [20, 20]
});

var millIcon = L.icon({
    iconUrl: 'img/mill.png',
    iconAnchor: [20, 20]
});

var churchIcon = L.icon({
    iconUrl: 'img/church.png',
    iconAnchor: [20, 20]
});

var cityhallIcon = L.icon({
    iconUrl: 'img/cityhall.png',
    iconAnchor: [20, 20]
});

//PLAYER MARKER
var x = city.player.coordinates[0];
var y = city.player.coordinates[1];


var lastPlayerPos = [52.2318, 21.0060];
if (localStorage.getItem(lastPlayerPosKey)) {
    lastPlayerPos = JSON.parse(localStorage.getItem(lastPlayerPosKey));
}

var playerMarker = L.Marker.movingMarker([[lastPlayerPos[0], lastPlayerPos[1]], [lastPlayerPos[0], lastPlayerPos[1]]], [0], { autostart: true, icon: playerIcon }).addTo(map);

//BUTTONS
function newButton(icon, func, position, id) {
    return L.easyButton({
        id: id, 
        position: position, 
        type: 'replace', 
        leafletClasses: true, 
        states: [{ 
            stateName: 'get-center',
            onClick: function(button, map) {
                func();
            },
            title: 'show me the middle',
            icon: icon
        }]
    }).addTo(map);
}

//RETURN BUTTON
newButton(
    '<img style="margin: -1px 0px 0px -5px;" src="img/returnButton.png">',
    function() { window.location = "index.html"; },
    'bottomleft',
    'returnBtn');

//NAVIBUTTON
newButton(
    '<img id="navimg" style="margin: -1px 0px 0px -5px;" src="img/navigationButtonOff.png">',
    function() {
        cordova.plugins.diagnostic.switchToLocationSettings();
    },
    'topleft',
    'navigationBtn');

//LOCKMAPBUTTON
var locked = mapDefault[3];
var lockImg;
if(locked)
    lockImg = "img/locked.png";
else
    lockImg = "img/unlocked.png";

newButton(
    '<img id="lockimg" style="margin: -1px 0px 0px -5px;" src="'+ lockImg +'">',
    function() {
        locked = !locked;
        if (window.location.href.indexOf("game") > -1) {
            if (locked)
                $("#lockimg").attr("src", "img/locked.png");
            else
                $("#lockimg").attr("src", "img/unlocked.png");
         }
    },
    'topleft',
    'lockBtn');

//CITYDETAILS BUTTON
newButton(
    '<img id="cityimg" style="margin: -1px 0px 0px -5px;" src="img/city.png">',
    function() {
        window.location = "city.html";
    },
    'topright',
    'citybtn');

//BUILD BUTTON
newButton(
    '<img id="buildimg" style="margin: -1px 0px 0px -5px;" src="img/build.png">',
    function() {
        window.location = "build.html";
    },
    'topright',
    'buildbtn');

//WORKERS BUTTON
newButton(
    '<img id="buildimg" style="margin: -1px 0px 0px -5px; height: 25px; width: 25px;" src="img/population.png">',
    function() {
        window.location = "workers.html";
    },
    'topright',
    'buildbtn');

//LOAD MARKS MAP
var BuildingCircle = {};
for (i in city.buildings) {
if (city.buildings[i].name == "Church" || city.buildings[i].name == "City Hall") {
        BuildingCircle[city.buildings[i].id] = L.circle(city.buildings[i].coordinates, {
            color: 'blue',
            fillColor: 'aqua',
            fillOpacity: 0.2,
            radius: range + city.buildings[i].people.length * rangePerPerson
        }).addTo(map);
    }
}

var HouseMarkers = [];
for (i in city.houses) {
    var widthHeight = 20 + city.houses[i].level * 2;
    houseIcon.options.iconSize = [widthHeight, widthHeight];
    houseIcon.options.iconAnchor = [widthHeight / 2, widthHeight / 2];
    HouseMarkers.push(L.marker(city.houses[i].coordinates, { icon: houseIcon }).addTo(map));
    L.circle(city.houses[i].coordinates, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.2,
        radius: range
    }).addTo(map);
    HouseMarkers[i].id = city.houses[i].id;
    HouseMarkers[i].on('click', function(e) {
        window.location = "building.html?id=" + e.target.id;
    });
}

var BuildingMarkers = [];

for (i in city.buildings) {
    var icon;
    var widthHeight = 20;
    if (city.buildings[i].name == "Sawmill") {
        icon = sawmillIcon;
        widthHeight = 20 + city.buildings[i].level * 2;
    }
    if (city.buildings[i].name == "Mill") {
        icon = millIcon;
        widthHeight = 20 + city.buildings[i].level * 2;
    }
    if (city.buildings[i].name == "Church") {
        icon = churchIcon;
        widthHeight = 25 + city.buildings[i].level * 2;
    }
    if (city.buildings[i].name == "City Hall") {
        icon = cityhallIcon;
        widthHeight = 30 + city.buildings[i].level * 2;
    }
    icon.options.iconSize = [widthHeight, widthHeight];
    icon.options.iconAnchor = [widthHeight / 2, widthHeight / 2];

    BuildingMarkers.push(L.marker(city.buildings[i].coordinates, { icon: icon }).addTo(map));
    BuildingMarkers[i].id = city.buildings[i].id;
    BuildingMarkers[i].on('click', function(e) {
        window.location = "building.html?id=" + e.target.id;
    });

    L.circle(city.buildings[i].coordinates, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.2,
        radius: range
    }).addTo(map);
}
