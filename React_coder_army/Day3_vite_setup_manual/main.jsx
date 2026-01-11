// import React from "react";
// above import os only needed when we are not using vite.congif.js

// import ReactDOM from "react-dom/client";
// above is commented as we are directly importing createRoot prop from react-dom object

import {createRoot} from "react-dom/client";
import App from "./App.jsx"


const element = <h1>hey this manually set up of react vite</h1>

// ReactDOM.createRoot(document.getElementById('root')).render(element);
createRoot(document.getElementById('root')).render(
    <>
    {element}
    <App/>
    </>
);