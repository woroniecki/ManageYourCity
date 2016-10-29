PersonController = function() {}

PersonController.dehydrate = function(person) {
	var newPerson = new Person();
    newPerson.id = person.id;
    newPerson.sex = person.sex;
    newPerson.hiredIn = person.hiredIn;
    newPerson.homeId = person.homeId;
    newPerson.age = person.age;
    newPerson.mood = person.mood;
    newPerson.illness = person.illness;
    newPerson.lastHealthTime = person.lastHealthTime;
    newPerson.lookingForJobStamp = person.lookingForJobStamp;
    return newPerson;
}