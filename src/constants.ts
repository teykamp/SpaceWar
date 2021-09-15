
const width:number = window.innerWidth;
const height:number = window.innerHeight;

// Game State ///////////////////////////////////////////////
const tickSpeed:number = 1;
const gravity:number = 1;
const health = 10;

export enum gameState {
    MENU,
    FIGHT,
    END,
}

// Banance Changes //////////////////////////////////////////


// Export
export enum CONSTANTS {
    WIDTH = width,
    HEIGHT = height,
    TICKSPEED = tickSpeed,
    GRAVITY = gravity,
    HEALTH = health,
};