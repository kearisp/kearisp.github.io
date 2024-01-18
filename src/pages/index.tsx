import {lazy} from "react";

export * from "./NotFoundPage";

export const FeedbackPage = lazy(() => import("./FeedbackPage"));
export const FodecPage = lazy(() => import("./FodecPage"));
export const HomePage = lazy(() => import("./HomePage"));
export const PathBuilderPage = lazy(() => import("./PathBuilderPage"));
