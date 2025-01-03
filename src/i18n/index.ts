import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import Backend from "i18next-http-backend";
import Path from "path-browserify";

import {PUBLIC_PATH} from "../env";


i18n.use(Backend).use(initReactI18next).init({
    lng: localStorage.getItem("lang") || "ua",
    fallbackLng: "en",
    debug: false,
    backend: {
        loadPath: Path.join(PUBLIC_PATH, "/locales/{{lng}}/{{ns}}.json")
    },
    interpolation: {
        escapeValue: false
    },
    ns: ["default", "fodec"]
});
