export default class Drawn {
    x:number;
    y:number;
    xVel:number;
    yVel:number;
    xAccel:number;
    yAccel:number;
    mass:number;
    toDelete:boolean;
    private scale:number;
    private hitboxRadius:number;
    private globalID:number;

    constructor(x:number, y:number, xVel:number, yVel:number, mass:number, scale:number, globalID:number, hitboxRadius:number) {
        this.x = x;
        this.y = y;
        this.xVel = xVel;
        this.yVel = yVel;
        this.xAccel = 0;
        this.yAccel = 0;
        this.mass = mass;
        this.toDelete = false;
        this.scale = scale;
        this.globalID = globalID;
        this.hitboxRadius = hitboxRadius;
    }

    destroySelf():void {
        this.toDelete = true;
    }

    distanceTo(x:number, y:number):number {
        return Math.sqrt((x - this.x)**2 + (y - this.y)**2);
    }

    doesCollide(x:number, y:number):boolean {
        return (this.distanceTo(x, y) < this.hitboxRadius);
    }
}