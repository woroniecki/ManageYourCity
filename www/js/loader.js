city = new City();
cityController.init();
if (localStorage.getItem("game")) {
    cityController.dehydrate(JSON.parse(localStorage.getItem("game")));
}
//city = new City();
city.init();

if(window.location.href.indexOf("game") > -1)
	reload();

function reload() {
    if (window.location.href.indexOf("game") > -1)
        $("#mapArea").text(city.getMap());
    else
    	menu.reload();
    cityController.save();
}
