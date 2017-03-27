ResourcesController = function() {}

ResourcesController.dehydrate = function(resources) {
    var newResources = new Resources();
    newResources.gold = resources.gold;
    newResources.wood = resources.wood;
    newResources.food = resources.food;
    return newResources;
}

ResourcesController.multiply = function(resources, multiplyNumber){
	return new Resources(
		resources.gold * multiplyNumber,
		resources.wood * multiplyNumber,
		resources.food * multiplyNumber
		)
}