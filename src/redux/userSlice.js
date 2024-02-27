import { createSlice } from "@reduxjs/toolkit";
import { apiPath } from "../constants/api_path";
import { userInfoKey } from "../constants/constants";
import { https } from "../services/api";

const initialState = {
  user: JSON.parse(localStorage.getItem(userInfoKey)),
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {setUser} = userSlice.actions;

export default userSlice.reducer;

export const getRentedRoomsByUser = async () => {
  const { data } = await https.get(apiPath.getRentedRoomByUser);
  console.log(data)
  return data.content;
};

