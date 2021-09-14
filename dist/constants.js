"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tickSpeed = exports.HEIGHT = exports.WIDTH = exports.ctx = void 0;
var canvas = document.getElementById("canvas");
console.log("logged");
exports.ctx = canvas.getContext("2d");
exports.WIDTH = window.innerWidth;
exports.HEIGHT = window.innerHeight;
// Game State ///////////////////////////////////////////////
exports.tickSpeed = 1;
// Banance Changes //////////////////////////////////////////
