import React, {useMemo, useEffect, useImperativeHandle, forwardRef, ElementType, PropsWithChildren} from "react";
import {useForm, FormProvider, Mode} from "react-hook-form";


type FormElement = {
    getValues: (name?: string) => any;
    setValue: (name: string, value: any) => void;
    reset: (values?: any) => void;
};

type Props = PropsWithChildren<{
    component?: ElementType;
    mode?: Mode;
    values?: any;
    shouldUnregister?: boolean;
    onChange?: (data: any) => Promise<void>|void;
    onSubmit?: (data: any) => Promise<void>|void;
}>;

const Form = forwardRef<FormElement, Props>((props, ref) => {
    const {
        component: Component = "form",
        mode,
        shouldUnregister = false,
        values,
        children,
        onChange,
        onSubmit
    } = props;

    const formProps = useForm({
        mode,
        shouldUnregister,
        defaultValues: values
    });

    const handleSubmit = useMemo(() => {
        return formProps.handleSubmit(async (data) => {
            if(onSubmit) {
                await onSubmit(data);
            }
        });
    }, [formProps.handleSubmit, onSubmit]);

    useEffect(() => {
        if(!onChange) {
            return;
        }

        const watcher = formProps.watch(async (data: any) => {
            if(formProps.formState.isSubmitting) {
                return;
            }

            if(await formProps.trigger()) {
                await formProps.handleSubmit(onChange)();
            }
        });

        return () => {
            watcher.unsubscribe();
        };
    }, [onChange]);

    useImperativeHandle(ref, () => {
        return {
            setValue: formProps.setValue,
            getValues: formProps.getValues,
            reset: formProps.reset
        };
    }, [formProps]);

    return (
        <FormProvider
          {...formProps}>
            <Component onSubmit={handleSubmit}>
                {children}
            </Component>
        </FormProvider>
    );
});


export {
    Form,
    FormElement,
    Props as FormProps
};
