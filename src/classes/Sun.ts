import Drawn from "./Drawn";

export default class Sun extends Drawn {
    constructor(x:number, y:number, xVel:number, yVel:number, mass:number, scale:number, globalID:number, hitboxRadius:number) {
        super(x, y, xVel, yVel, mass, scale, globalID, hitboxRadius);
    }
}