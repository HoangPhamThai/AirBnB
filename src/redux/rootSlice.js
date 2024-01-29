import { configureStore } from "@reduxjs/toolkit";
import spinnerSlice from "./redux/spinnerSlice";

export let store = configureStore({
    spinnerSlice,
})