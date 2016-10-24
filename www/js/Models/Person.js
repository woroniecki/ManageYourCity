function Person(id, sex, homeId, age){
	this.id = id;
	this.sex = sex;
	this.hiredIn = -1;
	this.homeId = homeId;
	this.resources = new Resources();

	this.age = Math.floor(Math.random() * 50);
	this.mood = Math.floor(Math.random() * 25);
	this.illness = Math.floor(Math.random() * 25);
}

Person.prototype = {
	update: function(){
		updateAge();
		updateMood();
		updateIllness();
	},
	updateLookingForJob: function(){
		if(this.hiredIn == -1){
			//no jak się udało już to będzie suzkać
			city.findJobFor(this.id);
		}
	},
	updateResources: function(){
		city.resources.food -= Math.floor(Math.random() * 3);
		if(city.resources.food < 0)
			city.resources.food = 0;
	},
	updateAge: function(){
		this.age += 1;
	},
	updateMood: function(){
		if(this.hiredIn != -1){
			if(true){//churchBlisko jeszcze nie wiem jak spradzac
				this.mood -= Math.floor(Math.random() * 3) + 2;
			}else{
				this.mood -= Math.floor(Math.random() * 3);
			}
		}else{
			if(true){//churchBlisko jeszcze nie wiem jak spradzac
				this.mood -= Math.floor(Math.random() * 3) - 2;
			}else{
				this.mood -= Math.floor(Math.random() * 3) - 3;
			}
		}
		if(this.mood < 0)
			this.mood = 0;
	},
	updateIllness: function(){
		if(city.food > 0){
			this.illness += Math.floor(Math.random() * 5) - 2;
		}else{
			this.illness += Math.floor(Math.random() * 5) * (-1);
		}
		if(this.illness < 0)
			this.illness = 0;
	},
	workResignation: function() {
        this.hiredIn = -1;
    },
	takeMoney: function(amount){
		money -= amount;
	},
	getHealth: function(){
		var health = 100 - (this.age - 20) - this.illness - this.mood;
		if(health < 0)
			return 0;
		if(health > 100)
			return 100;
		return health;
	}
}
