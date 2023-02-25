import React, {ReactNode} from "react";
import {Grid} from "@mui/material";

import {Header} from "src/views/blocks";


type Props = {
    children?:ReactNode;
};

const DashboardLayout:React.FC<Props> = (props:Props) => {
    const {
        children
    } = props;

    return (
        <Grid container
          direction="column"
          wrap="nowrap">
            <Grid item>
                <Header />
            </Grid>

            <Grid item>
                {children}
            </Grid>
        </Grid>
    );
};


export {DashboardLayout};