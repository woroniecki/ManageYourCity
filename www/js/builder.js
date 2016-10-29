function pressFunction(choice) {
    if (choice == "Return")
        window.location = "game.html";
    else {
        city.buildBuilding(choice);
        reload();
        window.location = "game.html";
    }
}
