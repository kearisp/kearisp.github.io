import React, {Suspense} from "react";
import {BrowserRouter, Route, Routes, Outlet} from "react-router-dom";
import {LoadingScreen} from "./blocks";
import {DashboardLayout} from "./layouts";
import {
    AdminPage,
    FeedbackPage,
    FodecPage,
    HomePage,
    NotFoundPage,
    PathBuilderPage
} from "./pages";
import {Router} from "src/env";
import "./App.scss";


export const App: React.FC = () => {
    return (
        <Suspense fallback={<LoadingScreen />}>
            <BrowserRouter>
                <Routes>
                    <Route
                      element={
                        <DashboardLayout>
                            <Outlet />
                        </DashboardLayout>
                      }>
                        <Route path={Router.url("home")} element={<HomePage />} />
                        <Route path={Router.url("admin")} element={<AdminPage />} />
                        <Route path={Router.url("fodec")} element={<FodecPage />} />
                        <Route path={Router.url("pathBuilder")} element={<PathBuilderPage />} />
                        <Route path={Router.url("feedback")} element={<FeedbackPage />} />
                    </Route>

                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
};
