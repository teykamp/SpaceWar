const width = window.innerWidth;
const height = window.innerHeight;
// Game State ///////////////////////////////////////////////
const tickSpeed = 1;
// Banance Changes //////////////////////////////////////////
// Export
var CONSTANTS;
(function (CONSTANTS) {
    CONSTANTS[CONSTANTS["WIDTH"] = width] = "WIDTH";
    CONSTANTS[CONSTANTS["HEIGHT"] = height] = "HEIGHT";
    CONSTANTS[CONSTANTS["TICKSPEED"] = tickSpeed] = "TICKSPEED";
})(CONSTANTS || (CONSTANTS = {}));
;
export default CONSTANTS;
