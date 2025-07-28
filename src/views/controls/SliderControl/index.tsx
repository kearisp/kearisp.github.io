import React, {useCallback} from "react";
import {useControl, ControlProps} from "src/hooks";


type Props = ControlProps<{
    label?: string;
    marks?: {label?: string; value: number}[];
    min?: number;
    max?: number;
    step?: number;
}>;

export const SliderControl: React.FC<Props> = (props) => {
    const {
        required,
        label,
        marks,
        min,
        max,
        step,
        name
    } = props;

    const {
        field: {
            disabled,
            value = 0,
            onChange
        }
    } = useControl({
        required,
        name
    });

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(Number(e.target.value));
    }, [onChange]);

    return (
        <div className="flex items-center gap-4">
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
              min={min}
              max={max}
              step={step}
              value={value}
              onChange={handleChange} />

            {marks && (
                <datalist id={`${name}-marks`}>
                    {marks.map((mark, index) => (
                        <option key={index} value={mark.value} label={mark.label} />
                    ))}
                </datalist>
            )}
        </div>
    );
};
