import {Model, Polygon, Point, BSPNode} from "motor-js";


export class Lines extends Model {
    constructor() {
        super();

        this.points = [];
        this.polygons = [];
    }

    public addPolygon(p: Polygon) {
        const indexes: number[] = [];

        for(let i = 0; i < p.points.length; i++) {
            indexes.push(this.points.length);
            this.points.push(p.points[i]);
        }

        this.polygons.push(indexes);
    }

    public addLine(start: Point, end: Point) {
        const index = this.points.length;

        this.points.push(start);
        this.points.push(end);

        this.polygons.push([index, index + 1]);
    }

    public getPolygons(): number[][] {
        return this.polygons;
    }
}
