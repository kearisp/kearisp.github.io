import React from "react";
import {createRoot} from "react-dom/client";
import {App} from "./views/App";
import "./i18n";


const root = createRoot(document.body);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

