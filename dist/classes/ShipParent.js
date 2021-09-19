import CONSTANTS from "../constants";
import Drawn from "./Drawn";
export default class Ship extends Drawn {
    constructor(x, y, xVel, yVel, mass, scale, globalID, hitboxRadius, moveSpeed, shootSpeed) {
        super(x, y, xVel, yVel, mass, scale, globalID, hitboxRadius);
        this.health = CONSTANTS.HEALTH; // can be overwritten per ship child
        this.imageAngle = 0;
        this.moveSpeed = moveSpeed;
        this.shootSpeed = shootSpeed;
    }
    updateSelf(sunX, sunY, sunMass) {
        const deltaX = this.x - sunX;
        const deltaY = this.y - sunY;
        const angle = Math.abs(Math.atan(deltaX / deltaY));
        const r = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
        const force = CONSTANTS.GRAVITY * sunMass / r;
        // update values
        this.xAccel += -Math.sign(deltaX) * force * Math.cos(angle);
        this.yAccel += -Math.sign(deltaY) * force * Math.sin(angle);
        this.xVel += this.xAccel;
        this.yVel += this.yAccel;
        this.x += this.xVel;
        this.y += this.yVel;
        this.updateCooldowns();
    }
    updateCooldowns() {
        // shoot
        // ult
    }
}
