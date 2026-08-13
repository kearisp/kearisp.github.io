import React from "react";
import {FormControl, FormControlProps} from "react-compose-form";
import {SwitchField, SwitchFieldProps} from "src/views/fields/SwitchField";


type SwitchControlProps = FormControlProps<SwitchFieldProps>;

export const SwitchControl: React.FC<SwitchControlProps> = (props) => {
    return (
        <FormControl
          {...props}
          as={SwitchField} />
    );
};
