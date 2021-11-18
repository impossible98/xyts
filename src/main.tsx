import CssBaseline from "@mui/material/CssBaseline";
import * as React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

import App from "./App";

ReactDOM.render(
    <React.StrictMode>
        <CssBaseline />
        <HashRouter>
            <App />
        </HashRouter>
    </React.StrictMode>,
    document.getElementById("root"),
);
