import { createSlice } from "@reduxjs/toolkit";
import { apiPath } from "../constants/api_path";
import { https } from "../services/api";

const initialState = {};

const bookingSlice = createSlice({
  name: "bookingSlice",
  initialState,
  reducers: {},
});

export const {} = bookingSlice.actions;

export default bookingSlice.reducer;

export const getListBooking = async () => {
  const { data } = await https.get(apiPath.getListBooking);
  console.log(data);
  return data.content;
};
