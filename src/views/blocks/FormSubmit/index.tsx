import React, {PropsWithChildren} from "react";
import {useFormContext} from "react-hook-form";


type FormSubmitProps = PropsWithChildren<{
    form?: string;
}>;

export const FormSubmit: React.FC<FormSubmitProps> = (props) => {
    const {
        form: formId,
        children
    } = props;

    const {
        formState: {
            disabled = false,
            isSubmitting = false
        }
    } = useFormContext();

    return (
        <button
          type="submit"
          form={formId}
          disabled={disabled || isSubmitting}>
            {children}
        </button>
    );
};
