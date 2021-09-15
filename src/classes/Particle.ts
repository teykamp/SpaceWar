import Drawn from "./Drawn";

export default class Particle extends Drawn {
    constructor(x:number, y:number, xVel:number, yVel:number, mass:number, scale:number, globalID:number, hitboxRadius:number) {
        super(x, y, xVel, yVel, mass, scale, globalID, hitboxRadius);
    }

    updatePosition():void {
        this.x += this.xVel;
        this.y += this.yVel;
    }
}