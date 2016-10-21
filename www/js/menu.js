Menu = function(){
	this.amount;
	this.indexNow = 0;
	this.options;

	this.prepareOptions();
	this.keypressed();
}

Menu.prototype = {
	prepareOptions: function(){
		this.options = $("#mapArea").text().split('\n');
		this.amount = this.options.length;
		this.setString();
	},
	setString: function(){
		var menuString = "";
		for(i in this.options){
			if(i==this.indexNow)
				menuString += "<--" + this.options[i] + "-->" + '\n';
			else
				menuString += this.options[i] + '\n';
			$( "#mapArea" ).text(menuString);
		}
	},
	keypressed: function(){
		$(document).keypress(function(e) {
            if (e.which == 13)
                pressFunction(menu.options[menu.indexNow]);
            if (e.which == 119){
            	menu.indexNow--;
            	if(menu.indexNow < 0)
            		menu.indexNow = menu.amount - 1;
            } //up
            if (e.which == 115){
            	menu.indexNow++;
            	if(menu.indexNow >= menu.amount)
            		menu.indexNow = 0;
            } //down
            menu.setString();
        });
	}
}

var menu = new Menu();



