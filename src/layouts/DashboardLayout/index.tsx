import React, {ReactNode} from "react";
import {Grid} from "@mui/material";

import {Header} from "./blocks";


type Props = {
    children?:ReactNode;
};

const DashboardLayout:React.FC<Props> = (props:Props) => {
    const {
        children
    } = props;

    return (
        <React.Fragment>
            <Header />

            <Grid container
              direction="column"
              wrap="nowrap">
                <Grid item>
                    {children}
                </Grid>
            </Grid>
        </React.Fragment>
    );
};


export {DashboardLayout};