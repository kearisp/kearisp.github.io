import React from "react";
import {FormControl, FormControlProps} from "react-compose-form";
import {InputField, InputFieldProps} from "src/views/fields/InputField";


export type InputControlProps = FormControlProps<InputFieldProps>;

export const InputControl: React.FC<InputControlProps> = (props) => {
    return (
        <FormControl
          {...props}
          as={InputField} />
    );
};
