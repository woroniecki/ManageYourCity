city = new City();
cityController.init();
if (localStorage.getItem("game")) {
    cityController.dehydrate(JSON.parse(localStorage.getItem("game")));
}
reload();

function reload() {
    if (window.location.href.indexOf("game") > -1)
        $("#mapArea").text(city.getMap());
    cityController.save();
}
