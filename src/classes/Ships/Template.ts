import ShipParent from "../ShipParent";

export default class Template extends ShipParent {
    private name:string;

    constructor(x:number, y:number, xVel:number, yVel:number, mass:number, scale:number, globalID:number, hitboxRadius:number, moveSpeed:number, shootSpeed:number) {
        super(x, y, xVel, yVel, mass, scale, globalID, hitboxRadius, moveSpeed, shootSpeed);
        this.name = "Template Ship";
    }

    getShipName():string {
        return this.name;
    }

    shoot():void {
        
    }

    fly():void {
        
    }
}