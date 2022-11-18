import React from "react";
// Libs
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
// Components
import App from "./app/App";
import { store } from "./app/store/store";
//  Styles
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
);
