import React, {useCallback, ChangeEvent} from "react";
import Switch from "@mui/material/Switch";

import {useControl, ControlProps} from "src/hooks";


type Props = ControlProps;

const SwitchControl: React.FC<Props> = (props) => {
    const {
        required,
        name
    } = props;

    const {
        field: {
            value = false,
            disabled,
            ref,
            onChange,
            onBlur
        }
    } = useControl({
        required,
        name
    });

    const handleChange = useCallback((e: ChangeEvent, checked: boolean) => {
        onChange(checked);
    }, [onChange]);

    return (
        <Switch
          ref={ref}
          disabled={disabled}
          checked={value}
          onBlur={onBlur}
          onChange={handleChange} />
    );
};


export {SwitchControl};
