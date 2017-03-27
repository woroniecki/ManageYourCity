function ResetGame(){
	if (confirm('Are you sure you want to reset game?\n You will loose all buildings and resources.')) {
	    city = new City();
		cityController.save();
		window.location = "index.html";
	}
}
