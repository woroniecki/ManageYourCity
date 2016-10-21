city = new City();
cityController.init();
if(localStorage.getItem("game")){
		console.log(JSON.parse(localStorage.getItem("game")));
		cityController.dehydrate(JSON.parse(localStorage.getItem("game")));
}else{
	reload();
}

console.log(city);

function reload(){
	if(window.location.href.indexOf("game") > -1)
		$("#mapArea").text(city.getMap());
	cityController.save();
}