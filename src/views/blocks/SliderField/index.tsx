import React from "react";
import {FormFieldProps} from "react-compose-form";
import {Container} from "src/views/blocks/Container";


export type SliderFieldProps = FormFieldProps<{
    label?: string;
    marks?: {label?: string; value: number}[];
    minValue?: number;
    maxValue?: number;
    step?: number;
    value?: number;
    onChange?: (value: number) => void;
}>;

export const SliderField: React.FC<SliderFieldProps> = (props) => {
    const {
        label,
        marks,
        minValue,
        maxValue,
        step,
        disabled,
        name,
        value = 0,
        onBlur,
        onChange
    } = props;

    return (
        <Container className="flex items-center gap-4">
            <div className="w-14 shrink-0 text-right text-sm text-muted-foreground">
                {value.toFixed(2)}
            </div>

            <input
              className="flex-1 accent-primary disabled:opacity-50"
              type="range"
              disabled={disabled}
              name={name}
              title={label}
              list={marks ? `${name}-marks` : undefined}
              min={minValue}
              max={maxValue}
              step={step}
              value={value}
              onBlur={onBlur}
              onChange={(e) => onChange?.(Number(e.target.value))} />

            {marks && (
                <datalist id={`${name}-marks`}>
                    {marks.map((mark, index) => (
                        <option key={index} value={mark.value} label={mark.label} />
                    ))}
                </datalist>
            )}
        </Container>
    );
};
