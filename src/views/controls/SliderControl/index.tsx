import React, {useCallback} from "react";
import Grid from "@mui/material/Grid";
import Slider, {SliderProps} from "@mui/material/Slider";

import {useControl, ControlProps} from "src/hooks";


type Props = ControlProps<{
    label?: SliderProps["title"];
    marks?: SliderProps["marks"];
    min?: SliderProps["min"];
    max?: SliderProps["max"];
    step?: SliderProps["step"];
}>;

const SliderControl: React.FC<Props> = (props) => {
    const {
        required,
        label,
        marks,
        min,
        max,
        step,
        name
    } = props;

    const {
        field: {
            value = 0,
            onChange
        }
    } = useControl({
        required,
        name
    });

    const handleChange = useCallback((e: Event, value: number | number[]) => {
        onChange(value as number);
    }, [onChange]);

    return (
        <Grid container spacing={1} alignItems="center">
            <Grid item container width={55} justifyContent="flex-end">
                <Grid item>
                    {value.toFixed(2)}
                </Grid>
            </Grid>

            <Grid item xs>
                <Slider
                  title={label}
                  marks={marks}
                  min={min}
                  max={max}
                  step={step}
                  value={value}
                  onChange={handleChange} />
            </Grid>
        </Grid>
    );
};


export {SliderControl};
