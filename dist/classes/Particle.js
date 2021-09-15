import Drawn from "./Drawn";
export default class Particle extends Drawn {
    constructor(x, y, xVel, yVel, mass, scale, globalID, hitboxRadius) {
        super(x, y, xVel, yVel, mass, scale, globalID, hitboxRadius);
    }
    updatePosition() {
        this.x += this.xVel;
        this.y += this.yVel;
    }
}
