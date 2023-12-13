import React, {useCallback} from "react";
import {Grid, Slider, SliderProps} from "@mui/material";


type Props = {
    title?: SliderProps["title"];
    marks?: SliderProps["marks"];
    min?: SliderProps["min"];
    max?: SliderProps["max"];
    step?: number;
    defaultValue?: SliderProps["defaultValue"];
    value?: number;
    onChange?: (value: number) => void;
};

const InputSlider: React.FC<Props> = (props) => {
    const {
        value,
        onChange,
        ...rest
    } = props;

    const handleChange = useCallback((e: Event, value: number|number[]) => {
        if(!onChange) {
            return;
        }

        onChange(value as number);
    }, [onChange]);

    return (
        <Grid container spacing={2} alignItems="center">
            <Grid item width={50}>
                {value}
            </Grid>

            <Grid item xs>
                <Slider
                  {...rest}
                  value={value}
                  onChange={handleChange} />
            </Grid>
        </Grid>
    );
};


export {InputSlider};
