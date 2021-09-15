import { gameState, CONSTANTS } from "./constants";
import Particle from "./classes/Particle";

var instances:any = [];
var particleInstances:Particle[] = [];
var canvas:any = document.getElementById("canvas");
var ctx:any = canvas.getContext("2d");

function canvasInit():void {
    ctx.canvas.width = CONSTANTS.WIDTH;
    ctx.canvas.height = CONSTANTS.HEIGHT;
    generateObjects(); // should only do when gamestate is fight. add menu system
    setInterval(gameTick, 60 * CONSTANTS.TICKSPEED);
}

function generateObjects():void {
    // generates ships/sun
    return;
}

function gameTick():void {
    ctx.clearRect(0, 0, CONSTANTS.WIDTH, CONSTANTS.HEIGHT)
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.stroke();
}

canvasInit();