import React, {useCallback} from "react";
import {Grid, useColorScheme} from "@mui/material";
import {
    CannyProvider,
    CannyFeedback,
    CannyChangelog
} from "react-canny";

import {CANNY_APP_ID, CANNY_BOARD_ID} from "src/env";
import {AuthButton} from "./blocks/AuthButton";


const Button: React.FC<any> = (props) => {
    return (
        <button {...props} />
    );
};


const FeedbackPage: React.FC = () => {
    const {mode = "dark"} = useColorScheme();

    const handleIdentity = useCallback(() => {
        console.log("Identity!");
    }, []);

    const handleLoad = useCallback(() => {
        console.log("LOADED!");
    }, []);

    return (
        <CannyProvider
          appId={CANNY_APP_ID}
          subdomain="kearisp"
          user={{
            id: "1",
            name: "Test User",
            email: "test@test.com"
          }}
          onIdentify={handleIdentity}>
            <CannyFeedback
              theme={["light", "dark"].includes(mode) ? mode as "dark" : "dark"}
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

                <Grid item>
                    <AuthButton />
                </Grid>
            </Grid>
        </CannyProvider>
    );
};


export default FeedbackPage;