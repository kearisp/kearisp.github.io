import React, {useState, useRef, useCallback, useEffect, MouseEvent as RMouseEvent} from "react";
import {Container, Grid, Switch} from "@mui/material";
import {Scene, Cube, Point2D, Point} from "motor-js";

import {InputSlider} from "./blocks";


const PathBuilderPage: React.FC = () => {
    const [isRunning, setRunning] = useState(true);
    const [fov, setFov] = useState(100);
    const [position, setPosition] = useState<Point>({x: 0, y: 0, z: 0});
    const [direction, setDirection] = useState<Point>({x: 0, y: 0, z: 1});
    const [pitch, setPitch] = useState(0);
    const [yaw, setYaw] = useState(0);
    const [angle, setAngle] = useState(0);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const rootRef = useRef<HTMLDivElement>(null);
    const sceneRef = useRef<Scene>();

    const handleChangeFov = useCallback((fov: number) => {
        if(!sceneRef.current) {
            return;
        }

        const scene = sceneRef.current;

        scene.getCamera().setFov(fov);
        setFov(fov);
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

    const handleChangeAngle = useCallback((angle: number) => {
        if(!sceneRef.current) {
            return;
        }

        const scene = sceneRef.current;

        scene.getCamera().setAngle(angle);
        setAngle(angle);
    }, []);

    const handleChangeDirection = useCallback((direction: Point) => {
        if(!sceneRef.current) {
            return;
        }

        const scene = sceneRef.current;

        scene.getCamera().setDirection(direction);
        setDirection(direction);
    }, []);

    const handleChangePosition = useCallback((position: Point) => {
        if(!sceneRef.current) {
            return;
        }

        const scene = sceneRef.current;

        const camera = scene.getCamera();

        camera.setPosition(position);
        setPosition(position);
    }, []);

    const handleChangePitch = useCallback((pitch: number) => {
        if(!sceneRef.current) {
            return;
        }

        const camera = sceneRef.current.getCamera();

        camera.setPitch(pitch);
        setPitch(pitch);
        setDirection(camera.getDirection());
    }, []);

    const handleChangeYaw = useCallback((yaw: number) => {
        if(!sceneRef.current) {
            return;
        }

        const camera = sceneRef.current.getCamera();

        camera.setYaw(yaw);
        setYaw(yaw);
        setDirection(camera.getDirection());
    }, []);

    const handleClick = useCallback((e: RMouseEvent) => {
        if(!sceneRef.current) {
            return;
        }

        const scene = sceneRef.current;
        scene.getCamera().activateDebug();

        e.preventDefault();
        e.stopPropagation();
    }, []);

    const handleMouseDown = useCallback((e: RMouseEvent) => {
        if(!sceneRef.current) {
            return;
        }

        const scene = sceneRef.current;

        const handleMove = (e: MouseEvent) => {
            const camera = scene.getCamera();

            camera.setDirectionFromAngles(
                Math.max(Math.min(camera.getPitch() - e.movementY * 0.5, 90), -90),
                camera.getYaw() + e.movementX * 0.5
            );

            setPitch(camera.getPitch());
            setYaw(camera.getYaw());
            setDirection(camera.getDirection());
        };

        const handleUp = () => {
            document.removeEventListener("mousemove", handleMove);
            document.removeEventListener("mouseup", handleUp);
        };

        document.addEventListener("mousemove", handleMove);
        document.addEventListener("mouseup", handleUp);
    }, []);

    useEffect(() => {
        if(!rootRef.current) {
            return;
        }

        if(!isRunning) {
            return;
        }

        const scene = (window as any).scene = sceneRef.current = new Scene("svg");

        const camera = scene.getCamera();

        camera.setFov(fov);
        camera.setPosition(position);
        camera.setDirection(direction);
        camera.setPitch(pitch);
        camera.setYaw(yaw);

        scene.run(rootRef.current);

        scene.add(new Cube(100, 100, 100), {x: -200, y: 0, z: 0});
        scene.add(new Cube(200, 1, 200), {x: -200, y: -51, z: 0});
        // scene.add(new Cube(200, 1, 200), {x: 0, y: -51, z: 0});
        // scene.add(new Cube(200, 1, 200), {x: 0, y: -51, z: -200});
        // scene.add(new Cube(200, 1, 200), {x: -200, y: -51, z: -200});

        return () => {
            scene.stop();
        };
    }, [isRunning]);

    useEffect(() => {
        const handleKeydown = (e: KeyboardEvent) => {
            if(!sceneRef.current) {
                return;
            }

            const scene = sceneRef.current;
            const position = scene.getCamera().getPosition();

            switch(e.key) {
                case "ArrowUp":
                    handleChangePosition({
                        ...position,
                        z: position.z + 1
                    });
                    break;

                case "ArrowDown":
                    handleChangePosition({
                        ...position,
                        z: position.z - 1
                    });
                    break;

                case "ArrowLeft":
                    handleChangePosition({
                        ...position,
                        x: position.x + 1
                    });
                    break;

                case "ArrowRight":
                    handleChangePosition({
                        ...position,
                        x: position.x - 1
                    });
                    break;

                case "w": {
                    const camera = scene.getCamera();

                    camera.setPosition({
                        x: camera.getPosition().x + camera.getDirection().x,
                        y: camera.getPosition().y + camera.getDirection().y,
                        z: camera.getPosition().z + camera.getDirection().z
                    });
                    setPosition(camera.getPosition());
                    e.preventDefault();
                    e.stopPropagation();
                    break;
                }

                case "a": {
                    const camera = scene.getCamera();

                    camera.setPosition({
                        x: camera.getPosition().x + camera.getDirectionLeft().x,
                        y: camera.getPosition().y + camera.getDirectionLeft().y,
                        z: camera.getPosition().z + camera.getDirectionLeft().z
                    });
                    setPosition(camera.getPosition());
                    e.preventDefault();
                    e.stopPropagation();
                    break;
                }

                case "d": {
                    const camera = scene.getCamera();

                    camera.setPosition({
                        x: camera.getPosition().x - camera.getDirectionLeft().x,
                        y: camera.getPosition().y - camera.getDirectionLeft().y,
                        z: camera.getPosition().z - camera.getDirectionLeft().z
                    });
                    setPosition(camera.getPosition());
                    e.preventDefault();
                    e.stopPropagation();
                    break;
                }

                case "s": {
                    const camera = scene.getCamera();

                    camera.setPosition({
                        x: camera.getPosition().x - camera.getDirection().x,
                        y: camera.getPosition().y - camera.getDirection().y,
                        z: camera.getPosition().z - camera.getDirection().z
                    });
                    setPosition(camera.getPosition());
                    e.preventDefault();
                    e.stopPropagation();
                    break;
                }

                case "q": {
                    e.preventDefault();
                    e.stopPropagation();
                    break;
                }

                case "e": {
                    e.preventDefault();
                    e.stopPropagation();
                    break;
                }
            }
        };

        document.addEventListener("keydown", handleKeydown);

        return () => {
            document.removeEventListener("keydown", handleKeydown);
        };
    }, [handleChangePosition]);

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
            x: -40,
            y: -20,
            z: -500
        };

        const drawPoint = (point: Point, color: string = "#FFFFFF") => {
            const projected: Point2D = getPointProject(point, camera);
            const size = 2;

            console.log("projected", projected);

            context.fillStyle = color;
            context.fillRect(canvas.width / 2 + (projected.x + camera.x) - size / 2, canvas.height / 2 - (projected.y + camera.y) - size / 2, size, size);
        };

        const drawLine = (pointStart: Point, pointEnd: Point, color = "#FFFFFF") => {
            const start = getPointProject(pointStart, camera),
                end = getPointProject(pointEnd, camera);

            context.strokeStyle = color;
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(canvas.width / 2 + start.x + camera.x, canvas.height / 2 - (start.y + camera.y));
            context.lineTo(canvas.width / 2 + end.x + camera.x, canvas.height / 2 - (end.y + camera.y));
            context.stroke();
            context.closePath();
        };

        context.clearRect(0, 0, canvas.width, canvas.height);

        drawLine({x: -150, y: 0, z: 0}, {x: 150, y: 0, z: 0});
        drawLine({x: 0, y: -150, z: 0}, {x: 0, y: 150, z: 0});
        drawLine({x: 0, y: 0, z: -150}, {x: 0, y: 0, z: 150});

        // const line1Start: Point = {x: -50, y: 20, z: 0};
        // const line1End: Point = {x: 50, y: 20, z: 0};
        // const line2Start: Point = {x: 20, y: -20, z: 0};
        // const line2End: Point = {x: 20, y: 50, z: 0};

        // drawLine(line1Start, line1End, "#990000");
        // drawLine(line2Start, line2End, "#CC9900");

        // const v1: Point = {
        //     x: line1End.x - line1Start.x,
        //     y: line1End.y - line1Start.y,
        //     z: line1End.z - line1Start.z
        // };

        // const v2: Point = {
        //     x: line2End.x - line2Start.x,
        //     y: line2End.y - line2Start.y,
        //     z: line2End.z - line2Start.z
        // };

        // const cross: Point = {
        //     x: v1.y * v2.z - v1.z * v2.y,
        //     y: v1.z * v2.x - v1.x * v2.z,
        //     z: v1.x * v2.y - v1.y * v2.x
        // };

        // const v3: Point = {
        //     x: line2Start.x - line1Start.x,
        //     y: line2Start.y - line1Start.y,
        //     z: line2Start.z - line1Start.z
        // };

        // const den: number = v1.x * v2.y * v3.z
        //     + v2.x * v3.y * v1.z
        //     + v3.x * v1.y * v2.z
        //     - v1.x * v3.y * v2.z
        //     - v2.x * v1.y * v3.z
        //     - v3.x * v2.y * v1.z;
        // let t1 = ((line2Start.x - line1Start.x) * v2.y - (line2Start.y - line1Start.y) * v2.x) / (v1.x * v2.y - v1.y * v2.x);
        // let t2 = ((P2.x - P1.x) * V1.y - (P2.y - P1.y) * V1.x) / (V1.x * V2.y - V1.y * V2.x);

        // let r1 = {
        //     x: line1Start.x + t1 * v1.x,
        //     y: line1Start.y + t1 * v1.y,
        //     z: line1Start.z + t1 * v1.z
        // };

        // drawPoint(v1, "#DD00FF");
        // drawPoint(v2, "#DDCC00");
        // drawPoint(v3, "#00FF00");
        // drawPoint(cross, "#FFFF00");
        // drawPoint(r1, "#0000FF");

        // drawLine(v1, v2);
        // drawLine(v2, cross);
        // drawLine(cross, v1);

        // console.log(v1, v2, v3, cross, den);
        // console.log("getLineIntersection:", getLineIntersection([{x: -100, y: 0, z: 0}, {x: 100, y: 0, z: 0}], [{x: 0, y: -100, z: 0}, {x: 0, y: 100, z: 0}]));

        // drawLine(center, position, "#FFFF00");
        // drawLine(center, direction, "#FF0000");

        // const rotatedPosition = rotatePoint(position, direction);

        // drawLine(center, rotatedPosition, "#FF00FF");
    }, [position, direction]);

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
              max={200}
              value={fov}
              onChange={handleChangeFov} />

            <InputSlider
              min={-90}
              max={90}
              title="Pitch"
              value={pitch}
              onChange={handleChangePitch} />

            <InputSlider
              min={-180}
              max={180}
              title="Yaw"
              value={yaw}
              onChange={handleChangeYaw} />

            {/*<InputSlider
              min={-360}
              max={360}
              title="Roll"
              value={angle}
              onChange={handleChangeAngle} />*/}

            <Grid container spacing={10}>
                <Grid container item xs={6} spacing={1}>
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
                            handleChangePosition({
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
                            handleChangePosition({
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
                            handleChangePosition({
                                ...position,
                                z: value
                            });
                          }} />
                    </Grid>
                </Grid>

                <Grid container item xs={6} spacing={1}>
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
                            handleChangeDirection({
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
                            handleChangeDirection({
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
                            handleChangeDirection({
                                ...direction,
                                z: value as number
                            });
                          }} />
                    </Grid>
                </Grid>
            </Grid>

            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <div
                      style={{
                        width: "100%",
                        height: "300px"
                      }}
                      ref={rootRef}
                      onContextMenu={handleClick}
                      onMouseDown={handleMouseDown} />
                </Grid>

                {/*<Grid item xs={4} display="flex" justifyContent="flex-end">
                    <PathBuilder
                      context="svg"
                      running={isRunning}
                      fov={fov}
                      position={position}
                      direction={direction}
                      angle={angle} />
                </Grid>*/}

                {/*<Grid item xs={4}>
                    <PathBuilder
                      context="canvas"
                      running={isRunning}
                      fov={fov}
                      position={position}
                      direction={direction}
                      angle={angle} />
                </Grid>*/}

                {/*<Grid item xs={6}>
                    <canvas
                      ref={canvasRef}
                      width={400}
                      height={400} />
                </Grid>*/}

                {/*<Grid item xs={6}>
                    <pre>{JSON.stringify({fov, position, direction}, null, 4)}</pre>
                </Grid>*/}
            </Grid>
        </Container>
    );
};


export default PathBuilderPage;
