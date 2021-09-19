
const WIDTH:number = window.innerWidth;
const HEIGHT:number = window.innerHeight;

// Game State ///////////////////////////////////////////////
const TICKSPEED:number = 1;
const GRAVITY:number = 1;
const HEALTH = 10;

enum gameState {
    MENU,
    FIGHT,
    END,
}

// Banance Changes //////////////////////////////////////////


// Export
export default {WIDTH, HEIGHT, TICKSPEED, GRAVITY, HEALTH, gameState};