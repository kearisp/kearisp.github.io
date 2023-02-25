import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import {ThemeProvider, CssBaseline} from "@mui/material";

import {App} from "./views/App";

import theme from "./theme";


ReactDOM.render(
    <Router>
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <App />
        </ThemeProvider>
    </Router>,
    document.getElementById("root")
);