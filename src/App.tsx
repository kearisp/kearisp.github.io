import React, {Suspense} from "react";
import {BrowserRouter, Route, Routes, Outlet} from "react-router-dom";

import {LoadingScreen} from "./blocks";
import {ThemeProvider} from "./providers";
import {DashboardLayout} from "./layouts";
import {
    FeedbackPage,
    HomePage,
    NotFoundPage
} from "./pages";

import {ROUTES} from "src/env";

import "./i18n";


const App: React.FC = () => {
    return (
        <ThemeProvider>
            <Suspense fallback={<LoadingScreen />}>
                <BrowserRouter>
                    <Routes>
                        <Route
                          element={
                            <DashboardLayout>
                                <Outlet />
                            </DashboardLayout>
                          }>
                            <Route path={ROUTES.home} element={<HomePage />} />
                            <Route path={ROUTES.feedback} element={<FeedbackPage />} />
                        </Route>

                        <Route element={<NotFoundPage />} />
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </ThemeProvider>
    );
};


export {App};