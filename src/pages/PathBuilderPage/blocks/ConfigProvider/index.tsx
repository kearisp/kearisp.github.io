import React, {useState, createContext, PropsWithChildren} from "react";
import {Point} from "motor-js";


type ContextType = {
    isRunning: boolean;
    setRunning: (isRunning: boolean) => void,
    fov: number;
    setFov: (fov: number) => void;
    pitch: number;
    setPitch: (pitch: number) => void;
    yaw: number;
    setYaw: (yaw: number) => void;
    direction: Point;
    setDirection: (direction: Point) => void;
    position: Point;
    setPosition: (position: Point) => void;
};

const Context = createContext<ContextType>({
    isRunning: false,
    setRunning() {},
    fov: 100,
    setFov() {},
    pitch: 0,
    setPitch() {},
    yaw: 0,
    setYaw() {},
    direction: {x: 1, y: 0, z: 0},
    setDirection() {},
    position: {x: 0, y: 0, z: 0},
    setPosition() {}
});

type Props = PropsWithChildren;

const ConfigProvider: React.FC<Props> = (props) => {
    const {children} = props;

    const [isRunning, setRunning] = useState(true);
    const [fov, setFov] = useState(100);
    const [pitch, setPitch] = useState(0);
    const [yaw, setYaw] = useState(0);
    const [position, setPosition] = useState<Point>({x: 0, y: 0, z: 0});
    const [direction, setDirection] = useState<Point>({x: 0, y: 0, z: 1});

    return (
        <Context.Provider
          value={{
            isRunning,
            setRunning,
            fov,
            setFov,
            pitch,
            setPitch,
            yaw,
            setYaw,
            direction,
            setDirection,
            position,
            setPosition
          }}>
            {children}
        </Context.Provider>
    );
};


export {
    ConfigProvider,
    Context as ConfigContext
};
