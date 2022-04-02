import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter basename="/nflashcard-client">
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
