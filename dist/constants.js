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
export default { WIDTH, HEIGHT, TICKSPEED, GRAVITY, HEALTH, gameState };
