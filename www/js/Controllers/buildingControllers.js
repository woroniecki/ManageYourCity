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
    if (buildingName === "Settlement")
        return Settlement.buildCost();
    return null;
}

BuildingController.getUpgradeCost = function(buildingName, level) {
    if (buildingName === "House")
        return House.upgradeCost(level);
    if (buildingName === "Sawmill")
        return Sawmill.upgradeCost(level);
    if (buildingName === "Mill")
        return Mill.upgradeCost(level);
    if (buildingName === "Church")
        return Church.upgradeCost(level);
    if (buildingName === "Settlement")
        return Settlement.upgradeCost(level);
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
