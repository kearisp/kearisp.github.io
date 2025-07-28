import {createNavigator} from "navigation-kit";
import {MenuItem} from "./types";


export const PUBLIC_PATH = "/";
export const CANNY_APP_ID = import.meta.env.REACT_APP_CANNY_APP_ID || "";
export const CANNY_BOARD_ID = import.meta.env.REACT_APP_CANNY_BOARD_ID || "";

export const Router = createNavigator({
    home: "/",
    admin: "/admin",
    fodec: "/fodec",
    pathBuilder: "/path-builder",
    feedback: "/feedback"
} as const);

export const HEADER_MENU: MenuItem[] = [
    {
        label: "menu.wocker",
        target: "_blank",
        to: "https://kearisp.github.io/wocker"
    },
    {
        label: "menu.fodec",
        to: Router.url("fodec")
    },
    {
        label: "menu.path-builder",
        to: Router.url("pathBuilder")
    },
    {
        label: "menu.feedback",
        to: Router.url("feedback")
    }
];