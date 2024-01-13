import React, {
    useState,
    useRef,
    useContext,
    useCallback,
    useEffect,
    MouseEvent as RMouseEvent
} from "react";
import {
    Scene,
    Cube,
    Polygon,
    CameraPositionChangeEvent,
    CameraDirectionChangeEvent,
    CameraFovChangeEvent
} from "motor-js";

import {ConfigContext} from "../ConfigProvider";
import {Lines} from "../../models/Lines";


const PathBuilder: React.FC = () => {
    const [isLocked, setLocked] = useState(false);
    const rootRef = useRef(null);
    const sceneRef = useRef<Scene>();
    const config = useContext(ConfigContext);

    const handleClick = useCallback(() => {
        if(!sceneRef.current) {
            return;
        }

        sceneRef.current.requestPointerLock();
    }, []);

    const handleContextMenu = useCallback((e: RMouseEvent) => {
        const scene = sceneRef.current;

        if(!scene) {
            return;
        }

        console.clear();
        scene.debug();

        e.preventDefault();
        e.stopPropagation();
    }, []);

    useEffect(() => {
        if(!rootRef.current) {
            return;
        }

        const scene = sceneRef.current = new Scene(config.context);
        (window as any).scene = scene;
        (window as any).context = scene.getContext();
        (window as any).camera = scene.getCamera();
        const camera = scene.getCamera();

        camera.setPitch(config.pitch);
        camera.setYaw(config.yaw);
        camera.setPosition(config.position);
        camera.setFov(config.fov);

        const lines = new Lines({x: 0, y: 0, z: 0});

        const a = new Polygon([
            {x: -100, y: -10, z: -10},
            {x: 0, y: 90, z: -10},
            {x: 100, y: -10, z: -10}
        ]);
        a.setId("a");

        const b = new Polygon([
            {x: -10, y: 0, z: -90},
            {x: -10, y: 120, z: 0},
            {x: -10, y: 0, z: 90}
        ]);
        b.setId("b");

        const c = new Polygon([
            {x: -30, y: 0, z: -20},
            {x: -20, y: 50, z: 0},
            {x: -10, y: 0, z: -10}
        ]);
        c.setId("c");

        // lines.addPolygon(b);
        // lines.addPolygon(a);
        // lines.addPolygon(c);
        // lines.addPolygon(new Polygon([
        //     {x: 100, y: -30, z: 100},
        //     {x: 100, y: -30, z: -100},
        //     {x: -100, y: -30, z: -100},
        //     {x: -100, y: -30, z: 100}
        // ]));
        lines.addPolygon(new Polygon([
            {x: -100, y: 100, z: 0},
            {x: 0, y: 0, z: 0},
            {x: 100, y: 100, z: 0},
            {x: 100, y: -100, z: 0},
            {x: -100, y: -100, z: 0}
        ]));

        // scene.add(new Cube(100, 100, 100), {x: 0, y: 0, z: 0}, "cube");
        // scene.add(new Cube(200, 1, 200), {x: 0, y: -100, z: 0}, "ground");
        lines.setId("lines");

        // scene.add(lines);

        scene.add(new Cube(100, 100, 100), {x: 0, y: 0, z: 0}, "cube");
        // scene.add(new Cube(200, 1, 200), {x: 0, y: -55, z: 0}, "ground");
        // scene.add(new Cube(1, 400, 400), {x: -120, y: 0, z: 0}, "fance");

        // scene.add(new Cube(1000, 1000, 1000), {x: 0, y: 0, z: 0}, "cube");

        // for(let i = -7; i <= 7; i++) {
        //     for(let j = -7; j <= 7; j++) {
        //         scene.add(new Cube(200, 1, 200), {x: 200 * i, y: -2000, z: 200 * j});
        //         scene.add(new Cube(200, 1, 200), {x: 200 * i, y: 2000, z: 200 * j});
        //     }
        // }

        scene.run(rootRef.current);

        return () => {
            scene.stop();
        };
    }, [config.context]);

    useEffect(() => {
        const handleLockChange = () => {
            const locked = !!document.pointerLockElement;

            setLocked(locked);
        };

        const handleF = (e: KeyboardEvent) => {
            if(!sceneRef.current) {
                return;
            }

            if(e.key !== "f") {
                return;
            }

            console.clear();
            sceneRef.current.debug();

            e.preventDefault();
        };

        const handleChangeContext = (e: KeyboardEvent) => {
            if(!sceneRef.current) {
                return;
            }

            if(!e.altKey) {
                return;
            }

            switch(e.key) {
                case "1":
                    config.setContext("svg");
                    break;

                case "2":
                    config.setContext("canvas");
                    break;

                case "3":
                    config.setContext("webgl");
                    break;

                default:
                    return;
            }

            e.preventDefault();
        };

        document.addEventListener("pointerlockchange", handleLockChange);
        document.addEventListener("keydown", handleF);
        document.addEventListener("keydown", handleChangeContext);

        return () => {
            document.removeEventListener("pointerlockchange", handleLockChange);
            document.removeEventListener("keydown", handleF);
            document.removeEventListener("keydown", handleChangeContext);
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
                            x: camera.getPosition().x - camera.getDirection().x,
                            y: camera.getPosition().y - camera.getDirection().y,
                            z: camera.getPosition().z - camera.getDirection().z
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
                            x: camera.getPosition().x + camera.getDirection().x,
                            y: camera.getPosition().y + camera.getDirection().y,
                            z: camera.getPosition().z + camera.getDirection().z
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
                camera.getPitch() + e.movementY * 0.1,
                camera.getYaw() - e.movementX * 0.1
            );
        };

        document.addEventListener("mousemove", handleMove);

        return () => {
            document.removeEventListener("mousemove", handleMove);
        };
    }, [isLocked]);

    useEffect(() => {
        if(!sceneRef.current) {
            return;
        }

        const camera = sceneRef.current.getCamera();

        const handlePositionChange = (e: CameraPositionChangeEvent) => {
            const {position} = e;

            config.setPosition(position);
        };

        const handleChangeDirection = (e: CameraDirectionChangeEvent) => {
            const {
                direction,
                yaw,
                pitch
            } = e;

            config.setDirection(direction);
            config.setPitch(pitch);
            config.setYaw(yaw);
        };

        const handleFovChange = (e: CameraFovChangeEvent) => {
            const {
                fov
            } = e;

            config.setFov(fov);
        };

        // const handlePitchChange = () => {};

        camera.addEventListener("positionChange", handlePositionChange);
        camera.addEventListener("directionChange", handleChangeDirection);
        camera.addEventListener("fovChange", handleFovChange);
        // camera.addEventListener("");

        return () => {
            camera.removeEventListener("positionChange", handlePositionChange);
            camera.removeEventListener("directionChange", handleChangeDirection);
            camera.removeEventListener("fovChange", handleFovChange);
        };
    }, [config]);

    useEffect(() => {
        const handleRunningChange = (e) => {
            if(!rootRef.current || !sceneRef.current) {
                return;
            }

            const scene = sceneRef.current;

            if(!e.data.isRunning) {
                scene.stop();
            }
            else {
                scene.run(rootRef.current);
            }
        };

        const handleChangePosition = (e) => {
            if(!sceneRef.current) {
                return;
            }

            const camera = sceneRef.current.getCamera();

            const {
                data: {
                    position
                }
            } = e;

            camera.setPosition(position);
        };

        const handleDirectionChange = (e) => {
            if(!sceneRef.current) {
                return;
            }

            const camera = sceneRef.current.getCamera();

            const {
                data: {
                    direction
                }
            } = e;

            camera.setDirection(direction);
        };

        const handleFovChange = (e) => {
            if(!sceneRef.current) {
                return;
            }

            const camera = sceneRef.current.getCamera();

            const {
                data: {
                    fov
                }
            } = e;

            camera.setFov(fov);
        };

        const handlePitchChange = (e) => {
            if(!sceneRef.current) {
                return;
            }

            const camera = sceneRef.current.getCamera();

            const {
                data: {
                    pitch
                }
            } = e;

            camera.setPitch(pitch);
        };

        const handleYawChange = (e) => {
            if(!sceneRef.current) {
                return;
            }

            const camera = sceneRef.current.getCamera();

            const {
                data: {
                    yaw
                }
            } = e;

            camera.setYaw(yaw);
        };

        config.addEventListener("changeRunning", handleRunningChange);
        config.addEventListener("changePosition", handleChangePosition);
        config.addEventListener("changeDirection", handleDirectionChange);
        config.addEventListener("changeFov", handleFovChange);
        config.addEventListener("changeYaw", handleYawChange);
        config.addEventListener("changePitch", handlePitchChange);

        return () => {
            config.removeEventListener("changeRunning", handleRunningChange);
            config.removeEventListener("changePosition", handleChangePosition);
            config.removeEventListener("changeDirection", handleDirectionChange);
            config.removeEventListener("changeFov", handleFovChange);
            config.removeEventListener("changeYaw", handleYawChange);
            config.removeEventListener("changePitch", handlePitchChange);
        };
    }, [config]);

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
