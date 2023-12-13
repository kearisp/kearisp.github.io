import React, {
    useRef,
    useCallback,
    useEffect,
    MouseEvent as ReactMouseEvent
} from "react";
import {Scene, Point} from "motor-js";

import {Block} from "./models";


type Props = {
    running?: boolean;
    context: "canvas" | "svg";
    fov: number;
    position?: Point;
    direction?: Point;
};

const PathBuilder: React.FC<Props> = (props) => {
    const {
        context,
        running = true,
        fov,
        position,
        direction
    } = props;

    const ref = useRef<HTMLDivElement>(null);
    const refScene = useRef<Scene>();

    const handleMouseDown = useCallback((e: ReactMouseEvent<HTMLDivElement>) => {
        if(!refScene.current) {
            return;
        }

        // const startX = e.clientX;
        // const startY = e.clientY;

        const handleMove = (e: MouseEvent) => {};

        const handleUp = (e: MouseEvent) => {
            // console.log(e);

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

        refScene.current = scene;

        scene.run(ref.current);

        scene.add(new Block(0, 0));
        // scene.add(new Block(20, 20));
        // scene.add(new Block(20, -20));
        // scene.add(new Block(-20, -20));

        return () => {
            refScene.current = undefined;
            scene.stop();
        };
    }, [context]);

    useEffect(() => {
        if(!ref.current || !refScene.current) {
            return;
        }

        const scene = refScene.current;

        if(running) {
            scene.run(ref.current);
        }
        else {
            scene.stop();
        }
    }, [running]);

    useEffect(() => {
        if(!refScene.current) {
            return;
        }

        const camera = refScene.current.getCamera();

        camera.setFov(fov);
    }, [fov]);

    useEffect(() => {
        if(!refScene.current) {
            return;
        }

        if(!position) {
            return;
        }

        refScene.current.getCamera().setPosition(position);
    }, [position]);

    useEffect(() => {
        if(!refScene.current) {
            return;
        }

        if(!direction) {
            return;
        }

        refScene.current.getCamera().setDirection(direction);
    }, [direction]);

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
