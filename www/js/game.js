$("body").keypress(function(e) {
    if (e.which == 13) //up
    {
    	var building = city.getBuildingWherePlayerIs();
    	if(building){
    		window.location = "building.html?id=" + building.id;
    	}else{
    		window.location = "build.html";
    	}
    }
    if (e.which == 32)
    {
    	window.location = "city.html";
    }
});
