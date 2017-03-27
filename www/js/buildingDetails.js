function pressFunction(choice) {
    if (choice == "Return")
        window.location = "game.html";
    if(!city.isInRange(city.player.coordinates, menu.building.coordinates, range))
        return;
    if (choice == "Upgrade") {
        menu.building.upgrade();
    }
    if (choice == "Put gold") {
        menu.building.putGold(rangeInput.value * 10);
    }
    if (choice == "Take product") {
        menu.building.takeProduct();
    }
    reload();
}

var rangeInput = document.getElementById("rangeinput");
if (rangeInput != null) {
    rangeInput.addEventListener('mousemove', function() {
        $("#goldp").val(rangeInput.value * 10);
    });
}
