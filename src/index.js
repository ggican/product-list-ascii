import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

import * as serviceWorker from "./serviceWorker";
import { StoreProvider } from "./reducers/index";
import "./styles/index.css";

ReactDOM.render(
    <StoreProvider>
        <App />
    </StoreProvider>,
    document.getElementById("root"),
);

serviceWorker.register();
