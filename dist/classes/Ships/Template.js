import ShipParent from "../ShipParent";
export default class Template extends ShipParent {
    constructor(x, y, xVel, yVel, mass, scale, globalID, hitboxRadius, moveSpeed, shootSpeed) {
        super(x, y, xVel, yVel, mass, scale, globalID, hitboxRadius, moveSpeed, shootSpeed);
        this.name = "Template Ship";
    }
    getShipName() {
        return this.name;
    }
    shoot() {
    }
    fly() {
    }
}
