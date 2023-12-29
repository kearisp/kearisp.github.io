import React, {ElementType} from "react";
import {useFormContext, useController} from "react-hook-form";


type Props = {
    component: ElementType;
    componentProps?: any;
    required?: boolean;
    name: string;
};

const FormControl: React.FC<Props> = (props) => {
    const {
        component: Component,
        componentProps,
        required,
        name
    } = props;

    const {
        control,
        formState: {
            isSubmitting
        },
    } = useFormContext();

    const {
        field
    } = useController({
        name,
        control
    });

    return (
        <Component
          {...componentProps}
          {...field}
          {...isSubmitting && {disabled: true}} />
    );
};


export {
    FormControl,
    Props as FormControlProps
};
