import React, {useState, useRef, useContext, useCallback, useEffect, MouseEvent as RMouseEvent} from "react";
import {Scene, Cube, Polygon, Vector, Point} from "motor-js";

import {ConfigContext} from "../ConfigProvider";
import {Lines} from "../../models/Lines";


const PathBuilder: React.FC = () => {
    const [isLocked, setLocked] = useState(false);
    const rootRef = useRef(null);
    const sceneRef = useRef<Scene>();
    const {isRunning, fov, pitch, yaw, direction} = useContext(ConfigContext);

    const handleContextMenu = useCallback((e: RMouseEvent) => {
        if(!sceneRef.current) {
            return;
        }

        const scene = sceneRef.current;
        scene.getCamera().activateDebug();

        e.preventDefault();
        e.stopPropagation();
    }, []);

    const handleClick = useCallback(() => {
        if(!sceneRef.current) {
            return;
        }

        sceneRef.current.requestPointerLock();
    }, []);

    useEffect(() => {
        if(!rootRef.current) {
            return;
        }

        const scene = sceneRef.current = new Scene("canvas");

        const lines = new Lines();

        const a = new Polygon([
            {x: -100, y: -10, z: -10},
            {x: 0, y: 90, z: -10},
            {x: 100, y: -10, z: -10}
        ]);

        const b = new Polygon([
            {x: -10, y: 0, z: -90},
            {x: -10, y: 120, z: 0},
            {x: -10, y: 0, z: 90}
        ]);

        const intersects = [
            ...Polygon.intersect(a, b),
            ...Polygon.intersect(b, a)
        ];

        for(let i = 0; i < intersects.length; i++) {
            const polygon = intersects[i];

            lines.addPolygon(polygon);
        }

        const aCenter = a.getCenter();
        const aNormal = Vector.fromPoint(a.getNormal()).multiply(100).add(aCenter);

        lines.addLine(aCenter, aNormal);

        const bCenter = b.getCenter();
        const bNormal = Vector.fromPoint(b.getNormal()).multiply(100).add(bCenter);

        lines.addLine(bCenter, bNormal);

        // scene.add(new Cube(100, 100, 100), {x: 0, y: 0, z: 0}, "cube");
        // scene.add(new Cube(200, 1, 200), {x: 0, y: -100, z: 0}, "ground");
        scene.add(lines);

        // scene.add(new Cube(500, 100, 500), {x: 0, y: 0, z: 0}, "cube");
        // scene.add(new Cube(1000, 1, 1000), {x: 0, y: -55, z: 0}, "ground");

        for(let i = -6; i <= 6; i++) {
            for(let j = -6; j <= 6; j++) {
                scene.add(new Cube(200, 1, 200), {x: 200 * i, y: -2000, z: 200 * j});
                scene.add(new Cube(200, 1, 200), {x: 200 * i, y: 2000, z: 200 * j});
            }
        }

        scene.run(rootRef.current);

        return () => {
            scene.stop();
        };
    }, []);

    useEffect(() => {
        const handleLockChange = () => {
            const locked = !!document.pointerLockElement;

            setLocked(locked);
        };

        document.addEventListener("pointerlockchange", handleLockChange);

        return () => {
            document.removeEventListener("pointerlockchange", handleLockChange);
        };
    }, []);

    useEffect(() => {
        let forwardInterval: NodeJS.Timeout;
        let backInterval: NodeJS.Timeout;
        let leftInterval: NodeJS.Timeout;
        let rightInterval: NodeJS.Timeout;
        let upInterval: NodeJS.Timeout;
        let downInterval: NodeJS.Timeout;

        const handleDown = (e: KeyboardEvent) => {
            if(!sceneRef.current) {
                return;
            }

            const scene = sceneRef.current;
            const camera = scene.getCamera();
            let position = camera.getPosition();

            switch(e.key) {
                case "ArrowUp":
                    camera.setPosition({
                        ...position,
                        z: position.z + 1
                    });
                    break;

                case "ArrowDown":
                    camera.setPosition({
                        ...position,
                        z: position.z - 1
                    });
                    break;

                case "ArrowLeft":
                    camera.setPosition({
                        ...position,
                        x: position.x + 1
                    });
                    break;

                case "ArrowRight":
                    camera.setPosition({
                        ...position,
                        x: position.x - 1
                    });
                    break;

                case "w": {
                    clearInterval(forwardInterval);
                    forwardInterval = setInterval(() => {
                        const camera = scene.getCamera();

                        camera.setPosition({
                            x: camera.getPosition().x + camera.getDirection().x,
                            y: camera.getPosition().y + camera.getDirection().y,
                            z: camera.getPosition().z + camera.getDirection().z
                        });
                    }, 0);

                    e.preventDefault();
                    e.stopPropagation();
                    break;
                }

                case "a": {
                    clearInterval(leftInterval);
                    leftInterval = setInterval(() => {
                        const camera = scene.getCamera();

                        camera.setPosition({
                            x: camera.getPosition().x + camera.getDirectionLeft().x,
                            y: camera.getPosition().y + camera.getDirectionLeft().y,
                            z: camera.getPosition().z + camera.getDirectionLeft().z
                        });
                    }, 0);
                    e.preventDefault();
                    e.stopPropagation();
                    break;
                }

                case "d": {
                    clearInterval(rightInterval);
                    rightInterval = setInterval(() => {
                        const camera = scene.getCamera();
                        camera.setPosition({
                            x: camera.getPosition().x - camera.getDirectionLeft().x,
                            y: camera.getPosition().y - camera.getDirectionLeft().y,
                            z: camera.getPosition().z - camera.getDirectionLeft().z
                        });
                    }, 0);
                    e.preventDefault();
                    e.stopPropagation();
                    break;
                }

                case "s": {
                    clearInterval(backInterval);
                    backInterval = setInterval(() => {
                        const camera = scene.getCamera();

                        camera.setPosition({
                            x: camera.getPosition().x - camera.getDirection().x,
                            y: camera.getPosition().y - camera.getDirection().y,
                            z: camera.getPosition().z - camera.getDirection().z
                        });
                    }, 0);

                    e.preventDefault();
                    e.stopPropagation();
                    break;
                }

                case "q": {
                    clearInterval(downInterval);
                    downInterval = setInterval(() => {
                        const camera = scene.getCamera();
                        const position = camera.getPosition();

                        camera.setPosition({
                            ...position,
                            y: position.y - 1
                        });
                    }, 0);

                    e.preventDefault();
                    e.stopPropagation();
                    break;
                }

                case "e": {
                    clearInterval(upInterval);
                    upInterval = setInterval(() => {
                        const camera = scene.getCamera();
                        const position = camera.getPosition();

                        camera.setPosition({
                            ...position,
                            y: position.y + 1
                        });
                    }, 0);
                    e.preventDefault();
                    e.stopPropagation();
                    break;
                }
            }
        };

        const handleUp = (e: KeyboardEvent) => {
            switch(e.key) {
                case "w":
                    clearInterval(forwardInterval);
                    break;

                case "a":
                    clearInterval(leftInterval);
                    break;

                case "d":
                    clearInterval(rightInterval);
                    break;

                case "s":
                    clearInterval(backInterval);
                    break;

                case "q":
                    clearInterval(downInterval);
                    break;

                case "e":
                    clearInterval(upInterval);
                    break;
            }
        };

        document.addEventListener("keypress", handleDown);
        document.addEventListener("keyup", handleUp);

        return () => {
            document.removeEventListener("keypress", handleDown);
            document.removeEventListener("keyup", handleUp);
        };
    }, []);

    useEffect(() => {
        if(!isLocked) {
            return;
        }

        const handleMove = (e: MouseEvent) => {
            if(!sceneRef.current) {
                return;
            }

            const camera = sceneRef.current.getCamera();

            camera.setDirectionFromAngles(
                camera.getPitch() - e.movementY * 0.1,
                camera.getYaw() + e.movementX * 0.1
            );
        };

        document.addEventListener("mousemove", handleMove);

        return () => {
            document.removeEventListener("mousemove", handleMove);
        };
    }, [isLocked]);

    useEffect(() => {
        if(!rootRef.current || !sceneRef.current) {
            return;
        }

        const scene = sceneRef.current;

        if(!isRunning) {
            scene.stop();
        }
        else {
            scene.run(rootRef.current);
        }
    }, [isRunning]);

    useEffect(() => {
        if(!sceneRef.current) {
            return;
        }

        const camera = sceneRef.current.getCamera();

        camera.setFov(fov);
    }, [fov]);

    useEffect(() => {
        if(!sceneRef.current) {
            return;
        }

        const camera = sceneRef.current.getCamera();

        camera.setPitch(pitch);
    }, [pitch]);

    useEffect(() => {
        if(!sceneRef.current) {
            return;
        }

        const camera = sceneRef.current.getCamera();

        camera.setYaw(yaw);
    }, [yaw]);

    // useEffect(() => {
    //     if(!sceneRef.current) {
    //         return;
    //     }
    //
    //     const camera = sceneRef.current.getCamera();
    //
    //     camera.setDirection(direction);
    // }, [direction]);

    return (
        <div
          ref={rootRef}
          style={{
            width: "100%",
            height: "calc(100vh - 55px)"
          }}
          onClick={handleClick}
          onContextMenu={handleContextMenu} />
    );
};


export {PathBuilder};
