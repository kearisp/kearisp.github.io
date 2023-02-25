import React from "react";
import {
    Switch,
    Route
} from "react-router-dom";

import {
    DashboardLayout,
    DefaultLayout
} from "./layouts";

import {
    FeedbackPage,
    HomePage,
    NotFoundPage
} from "./pages";

import {ROUTES} from "src/routing";


const App: React.FC = () => {
    return (
        <Switch>
            <Route exact path={ROUTES.home}>
                <DefaultLayout>
                    <HomePage />
                </DefaultLayout>
            </Route>

            <Route path={ROUTES.feedback}>
                <DashboardLayout>
                    <FeedbackPage />
                </DashboardLayout>
            </Route>

            <Route>
                <NotFoundPage />
            </Route>
        </Switch>
    );
};


export {App};