import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Store from "./utils/context/Store";

const Index = () => (
  <Store>
    <App />
  </Store>
);

ReactDOM.render(<Index />, document.getElementById("root"));
serviceWorker.unregister();
