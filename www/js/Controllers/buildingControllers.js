BuildingController = function() {}

BuildingController.dehydrate = function(building, object) {
    object.id = building.id;
    object.name = building.name;
    object.cost = building.cost;
    object.level = building.level;
    object.maxlevel = building.maxlevel;
    object.people = building.people;
    object.maxPeople = building.maxPeople;
    object.coordinates = building.coordinates;
    object.resources = ResourcesController.dehydrate(building.resources);
    object.lastCreateResourcesTime = building.lastCreateResourcesTime;
    return object;
}

BuildingController.getCost = function(buildingName) {
    if (buildingName === "House")
        return House.buildCost();
    if (buildingName === "Sawmill")
        return Sawmill.buildCost();
    if (buildingName === "Mill")
        return Mill.buildCost();
    if (buildingName === "Church")
        return Church.buildCost();
    if (buildingName === "City Hall")
        return Settlement.buildCost();
    return null;
}

BuildingController.getUpgradeCost = function(buildingName, level) {
    var amount = 1;
    var previous = 1;
    var temp = 0;
    for(i = 2;i <= level; i++){
        temp = amount;
        amount += previous;
        previous = temp;
    }
    if (buildingName === "House")
        return ResourcesController.multiply(House.upgradeCost(),amount);
    if (buildingName === "Sawmill")
        return ResourcesController.multiply(Sawmill.upgradeCost(),amount);
    if (buildingName === "Mill")
        return ResourcesController.multiply(Mill.upgradeCost(),amount);
    if (buildingName === "Church")
        return ResourcesController.multiply(Church.upgradeCost(),amount);
    if (buildingName === "City Hall")
        return ResourcesController.multiply(Settlement.upgradeCost(),amount);
    return null;
}

HouseController = function() {}

HouseController.dehydrate = function(house) {
    var house = BuildingController.dehydrate(house, new House());
    return house;
}

MillController = function() {}

MillController.dehydrate = function(mill) {
    var mill = BuildingController.dehydrate(mill, new Mill());
    
    return mill;
}

SawmillController = function() {}

SawmillController.dehydrate = function(sawmill) {
    var sawmill = BuildingController.dehydrate(sawmill, new Sawmill());
    
    return sawmill;
}

SettlementController = function() {}

SettlementController.dehydrate = function(settlement) {
    var settlement = BuildingController.dehydrate(settlement, new Settlement());
    
    return settlement;
}

ChurchController = function() {}

ChurchController.dehydrate = function(church) {
    var church = BuildingController.dehydrate(church, new Church());
    
    return church;
}
