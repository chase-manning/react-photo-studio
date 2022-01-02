import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import GlobalStyles from "./styles/GlobalStyles";
import { store } from "./state/store";
import Shortcuts from "./orchestration/Shortcuts";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Shortcuts />
      <GlobalStyles />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
