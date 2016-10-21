BuildingController = function() {}

BuildingController.dehydrate = function(building, object) {
    object.id = building.id;
    object.name = building.name;
    object.cost = building.cost;
    object.level = building.level;
    object.maxlevel = building.maxlevel;
    object.people = building.people;
    object.maxPoeple = building.maxPoeple;
    object.coordinates = building.coordinates;
    return object;
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
