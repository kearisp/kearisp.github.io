import {Model} from "motor-js";


class Block extends Model {
    public constructor(x: number = 0, y: number = 0, z: number = 0) {
        super(x, y, z);

        this.points = [
            {x: -50, y: -50, z: -50},   // 0
            {x: 50, y: -50, z: -50},    // 1
            {x: 50, y: 50, z: -50},     // 2
            {x: -50, y: 50, z: -50},    // 3

            {x: -50, y: -50, z: 50},    // 4
            {x: 50, y: -50, z: 50},     // 5
            {x: 50, y: 50, z: 50},      // 6
            {x: -50, y: 50, z: 50}      // 7
        ];

        this.polygons = [
            [0, 1, 2, 3],
            [1, 2, 6, 5],
            [4, 5, 6, 7],
            [0, 4, 7, 3],
            [7, 3, 2, 6],
            [0, 1, 5, 4]
        ];
    }
}


export {Block};
