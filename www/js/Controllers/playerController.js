PlayerController = function() {
    this.moving();
}

PlayerController.prototype = {
    dehydrate: function(playerTemp) {
        var player = new Player();
        player.coordinates = playerTemp.coordinates;
        return player;
    },
    moving: function() {
        if (window.location.href.indexOf("game") > -1) {
            $(document).keypress(function(e) {
                if (e.which == 119) //up
                    city.player.move(0, -1);
                if (e.which == 100) //right
                    city.player.move(1, 0);
                if (e.which == 115) //down
                    city.player.move(0, 1);
                if (e.which == 97) //left
                    city.player.move(-1, 0);
                reload();
            });
        }
    }
}

var playerController = new PlayerController();
