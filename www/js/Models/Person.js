function Person(id, sex, homeId, average) {
    this.id = id;
    this.sex = sex;
    this.hiredIn = -1;
    this.homeId = homeId;

    average =  (100 - average)/3.4;
    this.age = Math.floor(Math.random() * 20);
    this.mood = Math.floor(Math.random() * average + 10);
    this.illness = Math.floor(Math.random() * average + 10);

    this.lastHealthTime = new Date().getTime();
    this.healthStamp = 3 * timeStamp;
    this.lastLookingForJobTime = new Date().getTime();
    this.lookingForJobStamp = 3 * timeStamp;
}

Person.prototype = {
    update: function() {
    	this.updateLookingForJob();
        this.updateHealth();
    },
    updateHealth: function() {
        if (this.lastHealthTime + this.healthStamp <= new Date().getTime()) {
            this.updateAge();
            this.updateMood();
            this.updateIllness();
            this.updateResources();
            this.lastHealthTime += this.healthStamp;
            if(this.getHealthWithAge() <= 0)
                this.die();
        }
    },
    updateLookingForJob: function() {
        if (this.lastLookingForJobTime + this.lookingForJobStamp <= new Date().getTime()) {
            if (this.hiredIn === -1) {
                if(Math.floor(Math.random() * 100) <= this.getHealth())
                    city.findJobFor(this.id);
            }
            this.lastLookingForJobTime += this.lookingForJobStamp;
        }
    },
    updateResources: function() {
        city.resources.food -= Math.floor(Math.random() * 3);
        if (city.resources.food < 0)
            city.resources.food = 0;
    },
    updateAge: function() {
        this.age += 1;
    },
    updateMood: function() {
        if (this.hiredIn != -1) {
            if (city.anyChurchInRange(this.homeId)) { //churchBlisko jeszcze nie wiem jak spradzac
                this.mood -= Math.floor(Math.random() * 3) + 2;
            } else {
                this.mood -= Math.floor(Math.random() * 3);
            }
        } else {
            if (city.anyChurchInRange(this.homeId)) { //churchBlisko jeszcze nie wiem jak spradzac
                this.mood -= Math.floor(Math.random() * 3) - 2;
            } else {
                this.mood -= Math.floor(Math.random() * 3) - 3;
            }
        }
        if (this.mood < 0)
            this.mood = 0;
    },
    updateIllness: function() {
        if (city.food > 0) {
            this.illness -= Math.floor(Math.random() * 5) - 2;
        } else {
            this.illness -= Math.floor(Math.random() * 3) * (-1);
        }
        if (this.illness < 0)
            this.illness = 0;
    },
    die: function() {
        city.getBuilding(this.homeId).deletePerson(this.id);
        if(this.hiredIn != -1)
            city.getBuilding(this.hiredIn).deletePerson(this.id);
        city.killPerson(this.id);
        return;
    },
    workResignation: function() {
        this.hiredIn = -1;
    },
    getHealthWithAge: function() {
        var health = (((100 - (this.age - 30)) - this.illness * 1.5) - this.mood * 1.5);
        if (health < 0)
            return 0;
        if (health > 100)
            return 100;
        return health;
    },
    getHealth: function() {
        var health = 100  - (this.illness * 1.5) - (this.mood * 1.5);
        if (health < 0)
            return 0;
        if (health > 100)
            return 100;
        return health;
    }
}
