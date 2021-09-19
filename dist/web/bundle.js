(function () {
    'use strict';

    const WIDTH = window.innerWidth;
    const HEIGHT = window.innerHeight;
    // Game State ///////////////////////////////////////////////
    const TICKSPEED = 1;
    const GRAVITY = 1;
    const HEALTH = 10;
    var gameState;
    (function (gameState) {
        gameState[gameState["MENU"] = 0] = "MENU";
        gameState[gameState["FIGHT"] = 1] = "FIGHT";
        gameState[gameState["END"] = 2] = "END";
    })(gameState || (gameState = {}));
    // Banance Changes //////////////////////////////////////////
    // Export
    var CONSTANTS = { WIDTH, HEIGHT, TICKSPEED, GRAVITY, HEALTH, gameState };

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    function canvasInit() {
        ctx.canvas.width = CONSTANTS.WIDTH;
        ctx.canvas.height = CONSTANTS.HEIGHT;
        setInterval(gameTick, 60 * CONSTANTS.TICKSPEED);
    }
    function gameTick() {
        ctx.clearRect(0, 0, CONSTANTS.WIDTH, CONSTANTS.HEIGHT);
        ctx.moveTo(0, 0);
        ctx.lineTo(200, 100);
        // ctx.strokeStyle = "#000";
        ctx.stroke();
    }
    canvasInit();

}());
