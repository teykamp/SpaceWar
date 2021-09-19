import CONSTANTS  from "../constants";
import Drawn from "./Drawn";

export default class Ship extends Drawn {
    health:number;
    private imageAngle:number;
    private moveSpeed:number;
    private shootSpeed:number;

    constructor(x:number, y:number, xVel:number, yVel:number, mass:number, scale:number, globalID:number, hitboxRadius:number, moveSpeed:number, shootSpeed:number) {
        super(x, y, xVel, yVel, mass, scale, globalID, hitboxRadius);
        this.health = CONSTANTS.HEALTH; // can be overwritten per ship child
        this.imageAngle = 0;
        this.moveSpeed = moveSpeed;
        this.shootSpeed = shootSpeed;
    }

    updateSelf(sunX:number, sunY:number, sunMass:number):void {
        const deltaX:number = this.x - sunX;
        const deltaY:number = this.y - sunY;
        const angle:number = Math.abs(Math.atan(deltaX / deltaY));
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

    updateCooldowns():void {
        // shoot
        // ult
    }
}