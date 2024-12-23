import React, {ReactNode} from "react";
import {
    Container,
    Grid
} from "@mui/material";


type Props = {
    children?: ReactNode;
};

const DefaultLayout: React.FC<Props> = (props: Props) => {
    const {
        children
    } = props;

    return (
        <Grid container
          direction="column"
          wrap="nowrap">
            <Grid item>

            </Grid>

            <Grid item>
                {children}
            </Grid>
        </Grid>
    );
};


export {DefaultLayout};