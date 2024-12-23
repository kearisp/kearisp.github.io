import React, {Suspense} from "react";
import {BrowserRouter, Route, Routes, Outlet} from "react-router-dom";

import {LoadingScreen} from "./blocks";
import {ThemeProvider} from "./providers";
import {DashboardLayout} from "./layouts";
import {
    FeedbackPage,
    FodecPage,
    HomePage,
    MapPage,
    NotFoundPage,
    PathBuilderPage
} from "./pages";

import {ROUTES} from "src/env";

import "./App.scss";


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
                            <Route path={ROUTES.map} element={<MapPage />} />
                            <Route path={ROUTES.fodec} element={<FodecPage />} />
                            <Route path={ROUTES.pathBuilder} element={<PathBuilderPage />} />
                            <Route path={ROUTES.feedback} element={<FeedbackPage />} />
                        </Route>

                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </ThemeProvider>
    );
};


export {App};