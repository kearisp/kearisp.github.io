import React, {useCallback} from "react";
import {Grid} from "@mui/material";

import {
    CannyProvider,
    CannyFeedback,
    CannyWidget,
    CannyChangelog
} from "react-canny";

import {CANNY_APP_ID, CANNY_BOARD_ID} from "src/env";


const Button: React.FC<any> = (props: any) => {
    return (
        <button {...props} />
    );
};


const FeedbackPage: React.FC = () => {
    const handleLoad = useCallback(() => {
        console.log("LOADED!");
    }, []);

    return (
        <React.Fragment>
            <CannyProvider
              appId={CANNY_APP_ID}>
                <CannyWidget
                  boardToken={CANNY_BOARD_ID}
                  onLoadCallback={handleLoad} />

                <Grid container justifyContent="center" justifyItems="center">
                    <Grid item>
                        <CannyChangelog
                          component={Button}
                          type="button"
                          align="top"
                          position="right"
                          labelIDs={[]}>
                            Change log
                        </CannyChangelog>
                    </Grid>
                </Grid>
            </CannyProvider>
        </React.Fragment>
    );
};


export {FeedbackPage};