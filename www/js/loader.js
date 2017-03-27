city = new City();
cityController.init();

if (localStorage.getItem("game")) {
    cityController.dehydrate(JSON.parse(localStorage.getItem("game")));
}

var start = true;
var navigationActive = false;

function setNavigation(valueOnOff, img) {
    navigationActive = valueOnOff;
    if (window.location.href.indexOf("game") > -1) {
        $("#navimg").attr("src", img);
    }
}

city.init();
city.getWorkersAmount();

function reload() {
    if (window.location.href.indexOf("game") > -1) {
        if (locked)
            map.panTo(playerMarker._latlng);
        localStorage.setItem("mapDefault", JSON.stringify([map.getCenter().lat, map.getCenter().lng, map._zoom, locked]));
    } else if(window.location.href.indexOf("settings") <= 0)
        menu.reload();
    cityController.save();
}
