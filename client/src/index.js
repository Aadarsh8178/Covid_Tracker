import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import App from "./App";
import registerServiceWorker from "./serviceWorker";
import theme from "./theme";
import store from "./store";
import "./index.css";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById("app")
);

//registering service worker
registerServiceWorker();
