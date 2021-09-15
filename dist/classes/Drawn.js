export default class Drawn {
    constructor(x, y, xVel, yVel, mass, scale, globalID, hitboxRadius) {
        this.x = x;
        this.y = y;
        this.xVel = xVel;
        this.yVel = yVel;
        this.xAccel = 0;
        this.yAccel = 0;
        this.mass = mass;
        this.scale = scale;
        this.globalID = globalID;
        this.hitboxRadius = hitboxRadius;
    }
    distanceTo(x, y) {
        return Math.sqrt(Math.pow((x - this.x), 2) + Math.pow((y - this.y), 2));
    }
    doesCollide(x, y) {
        return (this.distanceTo(x, y) < this.hitboxRadius);
    }
}
