import React from "react";
import {
    ButtonGroupControl,
    SliderControl,
    SwitchControl
} from "src/views/controls";


export const ConfigForm: React.FC = () => {
    return (
        <div className="flex flex-col gap-4">
            <ButtonGroupControl
              label="Context"
              options={[
                {label: "SVG", value: "svg"},
                {label: "Canvas", value: "canvas"},
                {label: "WebGL", value: "webgl"}
              ]}
              name="context" />

            <SwitchControl
              name="isRunning" />

            <SliderControl
              label="FOV"
              min={0}
              max={200}
              name="fov" />

            <SliderControl
              label="Pitch"
              min={-90}
              max={90}
              name="pitch" />

            <SliderControl
              label="Yaw"
              min={-180}
              max={180}
              name="yaw" />

            <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-4">
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
                </div>

                <div className="flex flex-col gap-4">
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
                </div>
            </div>
        </div>
    );
};
