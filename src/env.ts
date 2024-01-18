export const PUBLIC_PATH = "/";
export const CANNY_APP_ID = process.env.REACT_APP_CANNY_APP_ID || "";
export const CANNY_BOARD_ID = process.env.REACT_APP_CANNY_BOARD_ID || "";
export const ROUTES = {
    home: "/",
    fodec: "/fodec",
    pathBuilder: "/path-builder",
    feedback: "/feedback"
};
export const HEADER_MENU = [
    {
        label: "menu.fodec",
        to: ROUTES.fodec
    },
    {
        label: "menu.path-builder",
        to: ROUTES.pathBuilder
    },
    {
        label: "menu.feedback",
        to: ROUTES.feedback
    }
];
