import React, {ComponentProps} from "react";
import clsx from "clsx";


type ContainerProps = ComponentProps<"div"> & {
    size?: "sm" | "md" | "lg";
};

export const Container: React.FC<ContainerProps> = (props) => {
    const {
        className = "",
        size = "lg",
        ...rest
    } = props;

    const modifications = clsx("mx-auto", className, {
        "max-w-(--breakpoint-sm)": size === "sm",
        "max-w-(--breakpoint-md)": size === "md",
        "max-w-(--breakpoint-lg)": size === "lg"
    });

    return (
        <div
          {...rest}
          className={modifications} />
    );
};
