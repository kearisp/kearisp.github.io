import {
    useFormContext,
    useController
} from "react-hook-form";


type Props = {
    required?: boolean;
    name: string;
};

export const useControl = (props: Props) => {
    const {
        name
    } = props;

    const {
        formState: {
            isSubmitting
        }
    } = useFormContext();

    const {
        field
    } = useController({
        name
    });

    return {
        field: {
            ...field,
            ...isSubmitting ? {disabled: true} : {}
        }
    };
};

export {Props as ControlProps};
