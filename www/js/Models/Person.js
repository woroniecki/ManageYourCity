function Person(id, sex, homeId){
	this.id = id;
	this.sex = sex;
	this.hiredIn = -1;
	this.homeId = homeId;
	this.resources = new Resources();

	this.age = age;
	this.mood = 100;
	this.illness = 100;
}

Person.prototype = {
	update: function(){
		updateAge();
		updateMood();
		updateIllness();
	},
	updateLookingForJob: function(){
		//jeśli nie ma pracy to niech przejdzie po wszystkich budnkach pracowniczych może znajdze
		//jesli ma prace a mu nie placą to się zwalnia
	},
	updateResources: function(){
		//ma wydać trochę (rand)
		//jeżeli czas na pobranie wypłaty to bierze
	},
	updateAge: function(){
		//jak timestamp to +1
	},
	updateMood: function(){
		//czy ma kasę, kościół
	},
	updateIllness: function(){
		//czy jest żarcie + random
	},
	takeMoney: function(amount){
		money -= amount;
	},
	getHealth: function(){
		var health = 100 - (age - 20) - illness - mood;
		if(health < 0)
			return 0;
		if(health > 100)
			return 100;
	}
}

