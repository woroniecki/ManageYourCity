PersonController = function() {}

PersonController.dehydrate = function(person) {
	var newPerson = new Person();
    newPerson.id = person.id;
    newPerson.sex = person.sex;
    newPerson.hiredIn = person.hiredIn;
    newPerson.homeId = person.homeId;
    newPerson.resources = ResourcesController.dehydrate(person.resources);
    newPerson.age = person.age;
    newPerson.mood = person.mood;
    newPerson.illness = person.illness;
    return newPerson;
}