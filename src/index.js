import React from "react";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import  store  from "./redux/store";
import { render } from "react-dom";
import {BrowserRouter} from "react-router-dom";

const rootElement = document.getElementById("root");
render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  rootElement
);

serviceWorker.unregister();
