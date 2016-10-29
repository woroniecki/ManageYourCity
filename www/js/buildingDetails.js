function pressFunction(choice) {
    if (choice == "Return")
        window.location = "game.html";
    if (choice == "Upgrade") {
        menu.building.upgrade();
        reload();
    }
    if (choice == "Put gold") {
        menu.building.putGold(50);
        reload();
    }
    if (choice == "Take product") {
        menu.building.takeProduct();
        reload();
    }
}
