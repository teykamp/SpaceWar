const width = window.innerWidth;
const height = window.innerHeight;
// Game State ///////////////////////////////////////////////
const tickSpeed = 1;
const gravity = 1;
const health = 10;
export var gameState;
(function (gameState) {
    gameState[gameState["MENU"] = 0] = "MENU";
    gameState[gameState["FIGHT"] = 1] = "FIGHT";
    gameState[gameState["END"] = 2] = "END";
})(gameState || (gameState = {}));
// Banance Changes //////////////////////////////////////////
// Export
export var CONSTANTS;
(function (CONSTANTS) {
    CONSTANTS[CONSTANTS["WIDTH"] = width] = "WIDTH";
    CONSTANTS[CONSTANTS["HEIGHT"] = height] = "HEIGHT";
    CONSTANTS[CONSTANTS["TICKSPEED"] = tickSpeed] = "TICKSPEED";
    CONSTANTS[CONSTANTS["GRAVITY"] = gravity] = "GRAVITY";
    CONSTANTS[CONSTANTS["HEALTH"] = health] = "HEALTH";
})(CONSTANTS || (CONSTANTS = {}));
;
