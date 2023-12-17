import React, {
    useRef,
    useCallback,
    useEffect,
    MouseEvent as ReactMouseEvent
} from "react";
import {Scene, Cube, Point, rotateX, rotateY} from "motor-js";

// import {Block} from "./models";


type Props = {
    running?: boolean;
    context: "canvas" | "svg";
    fov: number;
    position?: Point;
    direction?: Point;
    angle?: number;
};

const PathBuilder: React.FC<Props> = (props) => {
    const {
        context,
        running = true,
        fov,
        position,
        direction,
        angle = 0
    } = props;

    const ref = useRef<HTMLDivElement>(null);
    const sceneRef = useRef<Scene>();

    const handleMouseDown = useCallback((e: ReactMouseEvent<HTMLDivElement>) => {
        if(!sceneRef.current) {
            return;
        }

        const scene = sceneRef.current;

        // console.log(e);
        // @ts-ignore
        // console.log(e.clientX, e.clientY, e.offsetX, e.offsetY);
        // const offsetX = e.movementX;
        // const startX = e.clientX;
        // const startY = e.clientY;

        const handleMove = (e: MouseEvent) => {
            const camera = scene.getCamera();
            // const direction = camera.getDirection();

            // const newDirection = rotateY(rotateX(direction, e.movementX), e.movementY);

            // console.log(direction, newDirection);

            // camera.setAngle(camera.getAngle() + e.movementX);
            // camera.setDirection(newDirection);
        };

        const handleUp = (e: MouseEvent) => {
            document.removeEventListener("mousemove", handleMove);
            document.removeEventListener("mouseup", handleUp);
        };

        document.addEventListener("mousemove", handleMove);
        document.addEventListener("mouseup", handleUp);
    }, []);

    useEffect(() => {
        if(!ref.current) {
            return;
        }

        const scene = new Scene(context);

        sceneRef.current = scene;

        scene.run(ref.current);

        scene.add(new Cube(100, 100, 100), {x: 0, y: 0, z: -200});
        // scene.add(new Cube(50, 50, 50), {x: 0, y: 0, z: -200});
        // scene.add(new Cube(15, 15, 15), {x: -50, y: 0, z: 0});
        // scene.add(new Cube(15, 15, 15), {x: -25, y: 0, z: 0});
        // scene.add(new Cube(15, 15, 15), {x: 0, y: 0, z: 0});
        // scene.add(new Cube(15, 15, 15), {x: 25, y: 0, z: 0});
        // scene.add(new Cube(15, 15, 15), {x: 50, y: 0, z: 0});

        return () => {
            sceneRef.current = undefined;
            scene.stop();
        };
    }, [context]);

    useEffect(() => {
        if(!ref.current || !sceneRef.current) {
            return;
        }

        const scene = sceneRef.current;

        if(running) {
            scene.run(ref.current);
        }
        else {
            scene.stop();
        }
    }, [running]);

    useEffect(() => {
        if(!sceneRef.current) {
            return;
        }

        const camera = sceneRef.current.getCamera();

        camera.setFov(fov);
    }, [fov]);

    useEffect(() => {
        if(!sceneRef.current || !position) {
            return;
        }

        sceneRef.current.getCamera().setPosition(position);
    }, [position]);

    useEffect(() => {
        if(!sceneRef.current || !direction) {
            return;
        }

        sceneRef.current.getCamera().setDirection(direction);
    }, [direction]);

    useEffect(() => {
        if(!sceneRef.current || typeof angle === "undefined") {
            return;
        }

        sceneRef.current.getCamera().setAngle(angle);
    }, [angle]);

    return (
        <div
          ref={ref}
          style={{
            width: "200px",
            height: "200px",
            border: "1px solid #CCCCCC"
          }}
          onMouseDown={handleMouseDown} />
    );
};


export {PathBuilder};
