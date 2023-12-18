import React, {useContext, useCallback} from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";

import {InputSlider} from "../InputSlider";
import {ConfigContext} from "../ConfigProvider";


const ConfigPanel: React.FC = () => {
    const {
        isRunning, setRunning,
        fov, setFov,
        pitch, setPitch,
        yaw, setYaw,
        direction, setDirection,
        position, setPosition
    } = useContext(ConfigContext);

    const handleToggleRunning = useCallback(() => {
        setRunning(!isRunning);
    }, [isRunning]);

    const handleChangePositionX = useCallback((x: number) => {
        setPosition({
            ...position,
            x
        });
    }, [position]);

    const handleChangePositionY = useCallback((y: number) => {
        setPosition({
            ...position,
            y
        });
    }, [position]);

    const handleChangePositionZ = useCallback((z: number) => {
        setPosition({
            ...position,
            z
        });
    }, [position]);

    const handleChangeDirectionX = useCallback((x: number) => {
        setDirection({
            ...direction,
            x
        });
    }, [direction]);

    const handleChangeDirectionY = useCallback((y: number) => {
        setDirection({
            ...direction,
            y
        });
    }, [direction]);

    const handleChangeDirectionZ = useCallback((z: number) => {
        setDirection({
            ...direction,
            z
        });
    }, [direction]);

    return (
        <Box sx={{paddingLeft: 2, paddingRight: 2}}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Switch
                      checked={isRunning}
                      onChange={handleToggleRunning} />
                </Grid>

                <Grid item xs={12}>
                    <InputSlider
                      min={0}
                      max={200}
                      title="FOV"
                      value={fov}
                      onChange={setFov} />
                </Grid>
            </Grid>

            <InputSlider
              min={-90}
              max={90}
              title="Pitch"
              value={pitch}
              onChange={setPitch} />

            <InputSlider
              min={-180}
              max={180}
              title="Yaw"
              value={yaw}
              onChange={setYaw} />

            <Grid container>
                <Grid container item xs={6} spacing={1}>
                    <Grid item xs={12}>
                        <InputSlider
                          min={-100}
                          max={100}
                          marks={[
                            {label: "-100", value: -100},
                            {label: "0", value: 0},
                            {label: "100", value: 100}
                          ]}
                          title="Position X"
                          value={position.x}
                          onChange={handleChangePositionX} />
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
                          onChange={handleChangePositionY} />
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
                          onChange={handleChangePositionZ} />
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
                          onChange={handleChangeDirectionX} />
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
                          onChange={handleChangeDirectionY} />
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
                          onChange={handleChangeDirectionZ} />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};


export {ConfigPanel};
