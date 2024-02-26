import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";

import spinnerSlice from "./redux/spinnerSlice";
import userSlice from "./redux/userSlice";
import managementSlice from "./redux/managementSlice";
import bookingSlice from "./redux/bookingSlice";
import locationSlice from "./redux/locationSlice";
import roomSlice from "./redux/roomSlice";
import { configureStore } from "@reduxjs/toolkit";

const root = ReactDOM.createRoot(document.getElementById("root"));

export let store = configureStore({
  reducer: {
    spinnerSlice,
    userSlice,
    managementSlice,
    bookingSlice,
    locationSlice,
    roomSlice,
  },
});

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
