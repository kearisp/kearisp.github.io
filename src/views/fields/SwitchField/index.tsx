import React from "react";
import {FormFieldProps} from "react-compose-form";
import {Switch} from "src/views/blocks/Switch";


export type SwitchFieldProps = FormFieldProps;

export const SwitchField: React.FC<SwitchFieldProps> = (props) => {
    const {
        disabled,
        value,
        onChange,
        onBlur
    } = props;

    return (
        <Switch
          checked={value}
          // onBlur={onBlur}
          onCheckedChange={onChange} />
    );
};
