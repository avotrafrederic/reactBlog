import ReactDOM  from "react-dom/client";
import App from "./App";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
let main = document.getElementById("root");
let root = ReactDOM.createRoot(main);
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
