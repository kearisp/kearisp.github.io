import React from "react";
import clsx from "clsx";
import {useControl, ControlProps} from "src/hooks";


type Props = ControlProps<{
    label?: string;
    options: {
        disabled?: boolean;
        label: string;
        value: string;
    }[];
}>;

const ButtonGroupControl: React.FC<Props> = (props) => {
    const {
        label,
        options,
        name
    } = props;

    const {
        field: {
            disabled,
            value,
            onChange
        }
    } = useControl({
        name
    });

    return (
        <div
          className="inline-flex rounded-md border border-border overflow-hidden"
          title={label}>
            {options.map((option, index) => {
                const isActive = option.value === value;

                return (
                    <button
                      key={index}
                      type="button"
                      className={clsx(
                        "px-4 py-2 h-9 text-sm font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none",
                        index > 0 && "border-l border-border",
                        isActive
                            ? "bg-primary text-primary-foreground"
                            : "bg-background text-secondary-foreground hover:bg-accent hover:text-accent-foreground"
                      )}
                      disabled={disabled || option.disabled}
                      onClick={() => onChange(option.value)}>
                        {option.label}
                    </button>
                );
            })}
        </div>
    );
};


export {ButtonGroupControl};
