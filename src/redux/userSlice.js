import { createSlice } from "@reduxjs/toolkit";
import { apiPath } from "../constants/api_path";
import { userInfoKey } from "../constants/constants";
import { https } from "../services/api";
import { getRoomDetails } from "./roomSlice";

const initialState = {
  user: JSON.parse(localStorage.getItem(userInfoKey)),
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log(action.payload);
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;

export const getRentedRoomsByUser = async ({ userId }) => {
  console.log(userId);
  const { data } = await https.get(apiPath.getRentedRoomByUser + `/${userId}`);
  console.log(data);
  var listResult = [];
  if (data && data.content) {
    console.log(data.content);
    for (let item of data.content) {
      const roomDetailResponse = await getRoomDetails(item.maPhong);
      console.log(roomDetailResponse);
      listResult.push(roomDetailResponse);
      console.log(listResult);
    }
    console.log(listResult);
    return listResult;
  }
  console.log(listResult);
  return listResult;
};
