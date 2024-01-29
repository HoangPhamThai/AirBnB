import { configureStore } from "@reduxjs/toolkit";
import spinnerSlice from "./spinnerSlice";

export let store = configureStore({
  reducer:{
    spinnerSlice,
  }
});
