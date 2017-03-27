// every repeatable event
// e.g. creating resources, arriving people
// is repeted after every 'timeStamp' multiplied by 'event time counter' time (miliseconds)
var timeStamp =  1500000;
// red range of building (meters)
var range = 30;
// blue range of buildings which depends on amount of workers ( workersAmount * rangePerPerson )
var rangePerPerson = 20;

var lastPlayerPosKey = "lastplayerposkey";