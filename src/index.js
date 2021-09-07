import React from "react";
import reactDom from "react-dom";
import { Provider } from "react-redux";
import Store from "./store";

import App from "./App";

reactDom.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
