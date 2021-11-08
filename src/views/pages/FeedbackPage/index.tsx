import React from "react";

import {CannyProvider} from "react-canny";


const FeedbackPage:React.FC = () => {
    return (
        <React.Fragment>
            <CannyProvider
              appId="TEST">
                <React.Fragment>

                </React.Fragment>
            </CannyProvider>
        </React.Fragment>
    );
};


export default FeedbackPage;