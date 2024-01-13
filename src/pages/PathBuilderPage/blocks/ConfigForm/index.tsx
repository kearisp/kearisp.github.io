import React from "react";
import Grid from "@mui/material/Grid";

import {
    ButtonGroupControl,
    SliderControl,
    SwitchControl
} from "src/controls";


const ConfigForm: React.FC = () => {
    return (
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <ButtonGroupControl
                  label="Context"
                  options={[
                    {label: "SVG", value: "svg"},
                    {label: "Canvas", value: "canvas"},
                    {label: "WebGL", value: "webgl"}
                  ]}
                  name="context" />
            </Grid>

            <Grid item xs={12}>
                <SwitchControl
                  name="isRunning" />
            </Grid>

            <Grid item xs={12}>
                <SliderControl
                  label="FOV"
                  min={0}
                  max={200}
                  name="fov" />
            </Grid>

            <Grid item xs={12}>
                <SliderControl
                  label="Pitch"
                  min={-90}
                  max={90}
                  name="pitch" />
            </Grid>

            <Grid item xs={12}>
                <SliderControl
                  label="Yaw"
                  min={-180}
                  max={180}
                  name="yaw" />
            </Grid>

            <Grid container item xs={6} spacing={1}>
                <Grid item xs={12}>
                    <SliderControl
                      label="Position X"
                      marks={[
                        {label: "-100", value: -100},
                        {label: "0", value: 0},
                        {label: "100", value: 100}
                      ]}
                      min={-100}
                      max={100}
                      name="position.x" />
                </Grid>

                <Grid item xs={12}>
                    <SliderControl
                      label="Position Y"
                      marks={[
                        {label: "-100", value: -100},
                        {label: "0", value: 0},
                        {label: "100", value: 100}
                      ]}
                      min={-100}
                      max={100}
                      name="position.y" />
                </Grid>

                <Grid item xs={12}>
                    <SliderControl
                      label="Position Z"
                      marks={[
                        {label: "-100", value: -100},
                        {label: "0", value: 0},
                        {label: "100", value: 100}
                      ]}
                      min={-100}
                      max={100}
                      name="position.z" />
                </Grid>
            </Grid>

            <Grid container item xs={6} spacing={1}>
                <Grid item xs={12}>
                    <SliderControl
                      label="Direction X"
                      marks={[
                        {label: "-1", value: -1},
                        {label: "0", value: 0},
                        {label: "1", value: 1}
                      ]}
                      min={-1}
                      max={1}
                      step={0.01}
                      name="direction.x" />
                </Grid>

                <Grid item xs={12}>
                    <SliderControl
                      label="Direction Y"
                      marks={[
                        {label: "-1", value: -1},
                        {label: "0", value: 0},
                        {label: "1", value: 1}
                      ]}
                      min={-1}
                      max={1}
                      step={0.01}
                      name="direction.y" />
                </Grid>

                <Grid item xs={12}>
                    <SliderControl
                      label="Direction Z"
                      marks={[
                        {label: "-1", value: -1},
                        {label: "0", value: 0},
                        {label: "1", value: 1}
                      ]}
                      min={-1}
                      max={1}
                      step={0.01}
                      name="direction.z" />
                </Grid>
            </Grid>
        </Grid>
    );
};


export {ConfigForm};
