import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GlobalStyles from "./styles/GlobalStyles";
import { store } from "./state/store";
import { Provider } from "react-redux";
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

reportWebVitals();
