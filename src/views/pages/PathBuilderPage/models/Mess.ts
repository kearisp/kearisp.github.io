import {Model, Point} from "motor-js";


export class Mess extends Model {
    public constructor(position?: Point) {
        super(position);
    }

    public getPolygons(): number[][] {
        return [];
    }
}
