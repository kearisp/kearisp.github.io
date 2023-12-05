export const PUBLIC_PATH = "/";
export const CANNY_APP_ID = process.env.REACT_APP_CANNY_APP_ID || "";
export const CANNY_BOARD_ID = process.env.REACT_APP_CANNY_BOARD_ID || "";


const ROUTES = {
    home: "/",
    pathBuilder: "/path-builder",
    feedback: "/feedback"
};

const HEADER_MENU = [
    {
        label: "menu.path-builder",
        to: ROUTES.pathBuilder
    },
    {
        label: "menu.feedback",
        to: ROUTES.feedback
    }
];


export {
    ROUTES,
    HEADER_MENU
};
