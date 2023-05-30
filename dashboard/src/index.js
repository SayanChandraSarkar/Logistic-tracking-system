// main scss file
import "./assets/scss/main.scss";

import React from "react";
// import ReactDOM from 'react-dom';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// redux
import { Provider } from "react-redux";
import store from "./redux/store";

import { SettingsProvider } from "./contexts/SettingsContext";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HelmetProvider>
    <Provider store={store}>
      <SettingsProvider>
        {/* <BrowserRouter basename={process.env.REACT_APP_PUBLIC_URL}> */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SettingsProvider>
    </Provider>
  </HelmetProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
