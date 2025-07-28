import React from "react";
import {FormFieldProps} from "react-compose-form";


export type InputFieldProps = FormFieldProps;

export const InputField: React.FC<InputFieldProps> = (props) => {
    const {
        value,
        onChange,
        onBlur
    } = props;

    return (
        <input
          value={value}
          onBlur={onBlur}
          onChange={onChange} />
    );
};
