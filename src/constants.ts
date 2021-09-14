var canvas:any = document.getElementById("canvas");
console.log("logged")
export var ctx:any = canvas.getContext("2d");
export const WIDTH:number = window.innerWidth;
export const HEIGHT:number = window.innerHeight;

// Game State ///////////////////////////////////////////////
export const tickSpeed:number = 1;

// Banance Changes //////////////////////////////////////////