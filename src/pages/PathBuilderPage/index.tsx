import React, {useState, useRef, useCallback, useEffect} from "react";
import {Container, Grid, Slider, Switch} from "@mui/material";
import {Point} from "motor-js";

import {PathBuilder} from "src/blocks";
import {InputSlider} from "./blocks";


const PathBuilderPage: React.FC = () => {
    const [isRunning, setRunning] = useState(true);
    const [fov, setFov] = useState(300);
    const [position, setPosition] = useState<Point>({x: 0, y: 0, z: 0});
    const [direction, setDirection] = useState<Point>({x: 0, y: 0, z: 1});
    const [azimuth, setAzimuth] = useState(0);
    const [polar, setPolar] = useState(0);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const handleChangeFov = useCallback((newValue: number) => {
        setFov(newValue as number);
    }, []);

    const getPointProject = useCallback((point: Point, direction: Point) => {
        if(point.z === direction.z) {
            return {
                x: 0,
                y: 0
            };
        }

        const scale = direction.z / (direction.z + point.z);

        return {
            x: scale * (point.x - direction.x),
            y: scale * (point.y - direction.y)
        };
    }, [position, direction]);

    const handleCalculateDirection = useCallback((azimuth: number, polar: number) => {
        const polarRadians = azimuth * (Math.PI / 180),
            azimuthRadians = polar * (Math.PI / 180);

        const direction = {
            x: Math.sin(polarRadians) * Math.cos(azimuthRadians),
            y: Math.cos(polarRadians),
            z: Math.sin(polarRadians) * Math.sin(azimuthRadians)
        };

        // const distance = Math.sqrt(direction.x ** 2 + direction.y ** 2 + direction.z ** 2);

        setDirection(direction);
    }, []);

    const handleChangeAzimuth = useCallback((azimuth: number) => {
        handleCalculateDirection(azimuth, polar);

        setAzimuth(azimuth);
    }, [polar]);

    const handleChangePolar = useCallback((polar: number) => {
        handleCalculateDirection(azimuth, polar);

        setPolar(polar);
    }, [azimuth]);

    const rotatePoint = useCallback((point: Point, direction: Point) => {
        let rotationAngle = 45 * (Math.PI / 180);

        let cosAngle = Math.cos(rotationAngle);
        let sinAngle = Math.sin(rotationAngle);

        let rotationMatrix = [
            [
                cosAngle + direction.x ** 2 * (1 - cosAngle),
                direction.x * direction.y * (1 - cosAngle) - direction.z * sinAngle,
                direction.x * direction.z * (1 - cosAngle) + direction.y * sinAngle
            ],
            [
                direction.y * direction.x * (1 - cosAngle) + direction.z * sinAngle,
                cosAngle + direction.y ** 2 * (1 - cosAngle),
                direction.y * direction.z * (1 - cosAngle) - direction.x * sinAngle
            ],
            [
                direction.z * direction.x * (1 - cosAngle) - direction.y * sinAngle,
                direction.z * direction.y * (1 - cosAngle) + direction.x * sinAngle,
                cosAngle + direction.z ** 2 * (1 - cosAngle)
            ]
        ];

        let rotatedPoint = {
            x: rotationMatrix[0][0] * point.x + rotationMatrix[0][1] * point.y + rotationMatrix[0][2] * point.z,
            y: rotationMatrix[1][0] * point.x + rotationMatrix[1][1] * point.y + rotationMatrix[1][2] * point.z,
            z: rotationMatrix[2][0] * point.x + rotationMatrix[2][1] * point.y + rotationMatrix[2][2] * point.z
        };

        // console.log("rotationMatrix: ", rotationMatrix, "rotatedPoint: ", rotatedPoint);

        return rotatedPoint;
    }, [direction]);

    useEffect(() => {
        const handleKeydown = (e: KeyboardEvent) => {
            switch(e.key) {
                case "ArrowUp":
                    setPosition((position) => {
                        return {...position, y: position.y + 1};
                    });
                    break;

                case "ArrowDown":
                    setPosition((position) => {
                        return {...position, y: position.y - 1};
                    });
                    break;

                case "ArrowLeft":
                    setPosition((position) => {
                        return {...position, x: position.x + 1};
                    });
                    break;

                case "ArrowRight":
                    setPosition((position) => {
                        return {...position, x: position.x - 1};
                    });
                    break;
            }
        };

        document.addEventListener("keydown", handleKeydown);

        return () => {
            document.removeEventListener("keydown", handleKeydown);
        };
    }, []);

    useEffect(() => {
        if(!canvasRef.current) {
            return;
        }

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        if(!context) {
            return;
        }

        const center = {x: 0, y: 0, z: 0};

        const camera = {
            x: 200,
            y: -200,
            z: 500
        };

        const drawLine = (pointStart: Point, pointEnd: Point, color = "#FFFFFF") => {
            const start = getPointProject(pointStart, camera),
                end = getPointProject(pointEnd, camera);

            context.strokeStyle = color;
            context.lineWidth = 0.5;
            context.beginPath();
            context.moveTo(canvas.width / 2 + start.x + camera.x, canvas.height / 2 - start.y - camera.y);
            context.lineTo(canvas.width / 2 + end.x + camera.x, canvas.height / 2 - end.y - camera.y);
            context.stroke();
            context.closePath();
        };

        context.clearRect(0, 0, canvas.width, canvas.height);

        drawLine({x: -100, y: 0, z: 0}, {x: 100, y: 0, z: 0});
        drawLine({x: 0, y: -100, z: 0}, {x: 0, y: 100, z: 0});
        drawLine({x: 0, y: 0, z: -100}, {x: 0, y: 0, z: 100});

        drawLine(center, position, "#FFFF00");
        drawLine(center, direction, "#FF0000");

        const rotatedPosition = rotatePoint(position, direction);

        drawLine(center, rotatedPosition, "#FF00FF");
    }, [position, direction]);

    useEffect(() => {
        if(!canvasRef.current) {
            return;
        }

        const canvas = canvasRef.current;
        const ctx = canvasRef.current.getContext("2d");

        if(!ctx) {
            return;
        }

        // 3D координати об'єкта
        const vertices = [
            { x: -50, y: -50, z: -50 },
            { x:  50, y: -50, z: -50 },
            { x:  50, y:  50, z: -50 },
            { x: -50, y:  50, z: -50 },
            { x: -50, y: -50, z:  50 },
            { x:  50, y: -50, z:  50 },
            { x:  50, y:  50, z:  50 },
            { x: -50, y:  50, z:  50 }
        ];

        // З'єднати вершини, щоб сформувати грані
        const edges = [
            [0, 1], [1, 2], [2, 3], [3, 0],
            [4, 5], [5, 6], [6, 7], [7, 4],
            [0, 4], [1, 5], [2, 6], [3, 7]
        ];

        // Параметри камери
        const camera = {...direction, z: direction.z + 300};

        // Перспективна проєкція
        function projectPerspective(vertex) {
            const scale = camera.z / (camera.z + vertex.z);

            return {
                x: canvas.width / 2 + scale * (vertex.x - camera.x),
                y: canvas.height / 2 - scale * (vertex.y - camera.y)
            };
        }

        // Малюємо об'єкт на canvas
        function draw() {
            if(!ctx) {
                return;
            }

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for(const edge of edges) {
                const start = projectPerspective(vertices[edge[0]]);
                const end = projectPerspective(vertices[edge[1]]);

                ctx.beginPath();
                ctx.moveTo(start.x, start.y);
                ctx.lineTo(end.x, end.y);
                ctx.stroke();
            }
        }

        // draw();
    }, [direction]);

    return (
        <Container>
            <Switch
              checked={isRunning}
              onChange={(e, checked) => {
                setRunning(checked);
              }} />

            <InputSlider
              title="FOV"
              min={0}
              max={500}
              value={fov}
              onChange={handleChangeFov} />

            <InputSlider
              min={-360}
              max={360}
              title="Azimuth"
              value={azimuth}
              onChange={handleChangeAzimuth} />

            <InputSlider
              min={-360}
              max={360}
              title="Polar"
              value={polar}
              onChange={handleChangePolar} />

            <Grid container spacing={10}>
                <Grid container item xs={6} spacing={2}>
                    <Grid item xs={12}>
                        <InputSlider
                          min={-100}
                          max={100}
                          defaultValue={0}
                          title="Position X"
                          marks={[
                            {label: "-100", value: -100},
                            {label: "0", value: 0},
                            {label: "100", value: 100}
                          ]}
                          value={position.x}
                          onChange={(value) => {
                            setPosition({
                                ...position,
                                x: value
                            });
                          }} />
                    </Grid>

                    <Grid item xs={12}>
                        <InputSlider
                          min={-100}
                          max={100}
                          marks={[
                            {label: "-100", value: -100},
                            {label: "0", value: 0},
                            {label: "100", value: 100}
                          ]}
                          title="Position Y"
                          value={position.y}
                          onChange={(value) => {
                            setPosition({
                               ...position,
                               y: value
                            });
                          }} />
                    </Grid>

                    <Grid item xs={12}>
                        <InputSlider
                          min={-100}
                          max={100}
                          marks={[
                            {label: "-100", value: -100},
                            {label: "0", value: 0},
                            {label: "100", value: 100}
                          ]}
                          title="Position Z"
                          value={position.z}
                          onChange={(value) => {
                            setPosition({
                                ...position,
                                z: value
                            });
                          }} />
                    </Grid>
                </Grid>

                <Grid container item xs={6} spacing={2}>
                    <Grid item xs={12}>
                        <InputSlider
                          min={-1}
                          max={1}
                          step={0.01}
                          marks={[
                            {label: "-1", value: -1},
                            {label: "0", value: 0},
                            {label: "1", value: 1}
                          ]}
                          title="Direction X"
                          value={direction.x}
                          onChange={(value) => {
                            setDirection({
                                ...direction,
                                x: value as number
                            });
                          }} />
                    </Grid>

                    <Grid item xs={12}>
                        <InputSlider
                          min={-1}
                          max={1}
                          step={0.01}
                          marks={[
                            {label: "-1", value: -1},
                            {label: "0", value: 0},
                            {label: "1", value: 1}
                          ]}
                          title="Direction Y"
                          value={direction.y}
                          onChange={(value) => {
                            setDirection({
                               ...direction,
                               y: value as number
                            });
                          }} />
                    </Grid>

                    <Grid item xs={12}>
                        <InputSlider
                          min={-1}
                          max={1}
                          step={0.01}
                          marks={[
                            {label: "-1", value: -1},
                            {label: "0", value: 0},
                            {label: "1", value: 1}
                          ]}
                          title="Direction Z"
                          value={direction.z}
                          onChange={(value) => {
                            setDirection({
                                ...direction,
                                z: value as number
                            });
                          }} />
                    </Grid>
                </Grid>
            </Grid>

            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <canvas
                      ref={canvasRef}
                      width={400}
                      height={400} />
                </Grid>

                <Grid item xs={3} display="flex" justifyContent="flex-end">
                    <PathBuilder
                      context="svg"
                      running={isRunning}
                      position={position}
                      direction={direction}
                      fov={fov} />
                </Grid>

                <Grid item xs={3}>
                    <PathBuilder
                      context="canvas"
                      running={isRunning}
                      position={position}
                      direction={direction}
                      fov={fov} />
                </Grid>

                <Grid item xs={12}>
                    <pre>{JSON.stringify({fov, position, direction}, null, 4)}</pre>
                </Grid>
            </Grid>
        </Container>
    );
};


export default PathBuilderPage;
