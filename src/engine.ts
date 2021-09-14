import * as constants from "./constants";

function canvasInit():void {
    console.log("hfjsdkfhjks")
    constants.ctx.canvas.width = constants.WIDTH;
    constants.ctx.canvas.height = constants.HEIGHT;
    setInterval(draw, 60*constants.tickSpeed);
}

function draw():void {
    constants.ctx.clearRect(0, 0, constants.WIDTH, constants.HEIGHT)
    constants.ctx.moveTo(0, 0);
    constants.ctx.lineTo(200, 100);
    constants.ctx.stroke();
}

canvasInit();
