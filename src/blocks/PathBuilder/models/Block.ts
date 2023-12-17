import {Cube, Point} from "motor-js";


export class Block extends Cube {
    public constructor(position?: Point) {
        super(10, 10, 10, position);
    }
}
