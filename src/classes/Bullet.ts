import Drawn from "./Drawn";
import CONSTANTS from "../constants";
import Sun from "./Sun";
import ShipParent from "./ShipParent";

export default class Bullet extends Drawn {
    damage:number;

    constructor(x:number, y:number, xVel:number, yVel:number, mass:number, scale:number, globalID:number, hitboxRadius:number) {
        super(x, y, xVel, yVel, mass, scale, globalID, hitboxRadius);
        this.damage = CONSTANTS.BULLETDAMAGE;
    }

    updatePosition():void {
        this.x += this.xVel;
        this.y += this.yVel;
    }

    onCollide(other:any /* ship or sun */):void {
        if (typeof(other) == typeof(ShipParent)) {
            return;
        }
        
        else if (typeof(other) == typeof(Sun)) {
            return this.destroySelf();
        }

        return;
    }
}