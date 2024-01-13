import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

import {useControl, ControlProps} from "src/hooks";


type Props = ControlProps<{
    options: {
        disabled?: boolean;
        label: string;
        value: string;
    }[];
}>;

const ButtonGroupControl: React.FC<Props> = (props) => {
    const {
        label,
        options,
        name
    } = props;

    const {
        field: {
            disabled,
            value,
            onChange
        }
    } = useControl({
        name
    });

    return (
        <ButtonGroup
          title={label}
          disabled={disabled}>
            {options.map((option, index) => {
                return (
                    <Button
                      key={index}
                      color={option.value === value ? "success" : "info"}
                      disabled={option.disabled}
                      value={option.value}
                      onClick={() => onChange(option.value)}>
                        {option.label}
                    </Button>
                );
            })}
        </ButtonGroup>
    );
};


export {ButtonGroupControl};
