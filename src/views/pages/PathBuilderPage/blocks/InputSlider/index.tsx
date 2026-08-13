import React, {useCallback} from "react";


type Props = {
    title?: string;
    marks?: {label?: string; value: number}[];
    min?: number;
    max?: number;
    step?: number;
    defaultValue?: number;
    value?: number;
    onChange?: (value: number) => void;
};

const InputSlider: React.FC<Props> = (props) => {
    const {
        title,
        marks,
        min,
        max,
        step,
        defaultValue,
        value,
        onChange,
        ...rest
    } = props;

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        if(!onChange) {
            return;
        }

        onChange(Number(e.target.value));
    }, [onChange]);

    return (
        <div className="flex items-center gap-4">
            <div className="w-14 shrink-0 text-right text-sm text-muted-foreground">
                {(value ?? defaultValue ?? 0).toFixed(2)}
            </div>

            <div className="flex-1">
                <input
                  {...rest}
                  className="w-full accent-primary"
                  type="range"
                  title={title}
                  list={marks ? `${title}-marks` : undefined}
                  min={min}
                  max={max}
                  step={step}
                  defaultValue={defaultValue}
                  value={value}
                  onChange={handleChange} />

                {marks && (
                    <datalist id={`${title}-marks`}>
                        {marks.map((mark, index) => (
                            <option key={index} value={mark.value} label={mark.label} />
                        ))}
                    </datalist>
                )}
            </div>
        </div>
    );
};


export {InputSlider};
