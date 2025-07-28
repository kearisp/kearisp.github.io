import React, {useCallback} from "react";
import {
    CannyProvider,
    CannyFeedback,
    CannyChangelog
} from "react-canny";
import {useTheme} from "src/hooks/useTheme";
import {Container} from "src/views/blocks/Container";
import {Button} from "src/views/blocks/Button";
import {CANNY_APP_ID, CANNY_BOARD_ID} from "src/env";
import {AuthButton} from "./blocks/AuthButton";


const FeedbackPage: React.FC = () => {
    const {theme} = useTheme();

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
            <Container className="flex flex-col gap-6 py-6">
                <div className="flex items-center justify-center gap-4">
                    <CannyChangelog
                      component={Button}
                      variant="outline"
                      align="top"
                      position="right"
                      labelIDs={[]}>
                        Change log
                    </CannyChangelog>

                    <AuthButton />
                </div>

                <CannyFeedback
                  theme={theme}
                  boardToken={CANNY_BOARD_ID}
                  onLoadCallback={handleLoad} />
            </Container>
        </CannyProvider>
    );
};


export default FeedbackPage;
