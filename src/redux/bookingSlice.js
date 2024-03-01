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

export const bookRoom = async({roomId, startDate, leaveDate, totalGuest, userId})=>{
  const {data} = await https.post(apiPath.bookRoom, {
    maPhong: roomId,
    ngayDen: startDate,
    ngayDi: leaveDate,
    soLuongKhach: totalGuest,
    maNguoiDung: userId,
  })
  console.log(data)
  return data;
}