import React, {
    useState,
    useRef,
    useCallback,
    useEffect,
    createContext,
    PropsWithChildren
} from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import {Point, Observable} from "motor-js";

import {Form, FormElement} from "src/views/blocks";
import {ConfigForm} from "../ConfigForm";


type EventMap = {
    changeContext: {data: Data;};
    changeRunning: {data: Data;};
    changeFov: {data: Data;};
    changePitch: {data: Data;};
    changeYaw: {data: Data;};
    changePosition: {data: Data;};
    changeDirection: {data: Data;};
};

type Data = {
    context: "svg" | "canvas" | "webgl";
    isRunning: boolean;
    fov: number;
    pitch: number;
    yaw: number;
    position: Point;
    direction: Point;
};

type ContextType = Data & {
    setRunning: (isRunning: boolean) => void,
    setFov: (fov: number) => void;
    setPitch: (pitch: number) => void;
    setYaw: (yaw: number) => void;
    setDirection: (direction: Point) => void;
    setPosition: (position: Point) => void;
    setContext: (context: Data["context"]) => void;
    addEventListener: Observable<EventMap>["addEventListener"];
    removeEventListener: Observable<EventMap>["removeEventListener"];
};

const Context = createContext<ContextType>({
    context: "webgl",
    setContext() {},
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
    setPosition() {},
    addEventListener() {},
    removeEventListener() {}
});

type Props = PropsWithChildren;

const ConfigProvider: React.FC<Props> = (props) => {
    const {children} = props;

    const [isOpen, setOpen] = useState(false);
    const [isRunning, setRunning] = useState(true);
    const [context, setContext] = useState<"svg"|"canvas"|"webgl">("canvas");
    const [fov, setFov] = useState(45);
    const [pitch, setPitch] = useState(0);
    const [yaw, setYaw] = useState(0);
    const [position, setPosition] = useState<Point>({x: 0, y: 0, z: 300});
    const [direction, setDirection] = useState<Point>({x: 0, y: 0, z: -1});
    const observer = useRef<Observable<EventMap>>(new Observable<EventMap>());
    const formRef = useRef<FormElement>(null);

    const handleClose = useCallback(() => {
        setOpen(false);
    }, []);

    const handleDiff = useCallback((prev: any, next: any): boolean => {
        return JSON.stringify(prev) !== JSON.stringify(next);
    }, []);

    const handlePositionChange = useCallback((position: Point) => {
        setPosition(position);
    }, []);

    const handleDirectionChange = useCallback((direction: Point) => {
        setDirection(direction);
    }, []);

    const handleAddEventListener: Observable<EventMap>["addEventListener"] = useCallback((type, listener) => {
        observer.current.addEventListener(type, listener);
    }, []);

    const handleRemoveEventListener: Observable<EventMap>["removeEventListener"] = useCallback((type, listener) => {
        observer.current.removeEventListener(type, listener);
    }, []);

    const handleSubmit = useCallback((data: Data) => {
        if(handleDiff(context, data.context)) {
            setContext(data.context);
            observer.current.emit("changeContext", {data});
        }

        if(handleDiff(isRunning, data.isRunning)) {
            setRunning(data.isRunning);
            observer.current.emit("changeRunning", {data});
        }

        if(handleDiff(position, data.position)) {
            setPosition(data.position);
            observer.current.emit("changePosition", {data});
        }

        if(handleDiff(direction, data.direction)) {
            setDirection(data.direction);
            observer.current.emit("changeDirection", {data});
        }

        if(handleDiff(fov, data.fov)) {
            setFov(data.fov);
            observer.current.emit("changeFov", {data});
        }

        if(handleDiff(pitch, data.pitch)) {
            setPitch(data.pitch);
            observer.current.emit("changePitch", {data});
        }

        if(handleDiff(yaw, data.yaw)) {
            setYaw(data.yaw);
            observer.current.emit("changeYaw", {data});
        }
    }, [context, position, direction, fov, pitch, yaw, pitch]);

    useEffect(() => {
        const handleKeydown = (e: KeyboardEvent) => {
            if(e.key === "p") {
                setOpen((open) => !open);
                e.preventDefault();
            }
        };

        document.addEventListener("keydown", handleKeydown);

        return () => {
            document.removeEventListener("keydown", handleKeydown);
        };
    }, []);

    return (
        <Context.Provider
          value={{
            context,
            setContext,
            isRunning,
            setRunning,
            fov,
            setFov,
            pitch,
            setPitch,
            yaw,
            setYaw,
            direction,
            setDirection: handleDirectionChange,
            position,
            setPosition: handlePositionChange,
            addEventListener: handleAddEventListener,
            removeEventListener: handleRemoveEventListener
          }}>
            <Drawer
              sx={{
                width: "50vw"
              }}
              PaperProps={{
                sx: {
                    width: "50vw",
                    padding: 2
                }
              }}
              open={isOpen}
              anchor="right"
              onClose={handleClose}>
                <Form
                  ref={formRef}
                  mode="onSubmit"
                  values={{
                    context,
                    isRunning,
                    fov,
                    pitch,
                    yaw,
                    position,
                    direction
                  }}
                  shouldUnregister
                  onChange={handleSubmit}>
                    <Box sx={{paddingLeft: 2, paddingRight: 2}}>
                        <ConfigForm />
                    </Box>
                </Form>
            </Drawer>

            {children}
        </Context.Provider>
    );
};


export {
    ConfigProvider,
    Context as ConfigContext
};
