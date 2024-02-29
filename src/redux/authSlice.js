import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiPath } from "../constants/api_path";
import { userInfoKey } from "../constants/constants";
import { https } from "../services/api";

const initialState = {
  user: JSON.parse(localStorage.getItem(userInfoKey)),
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;

export const loginApi = async ({ email, password }) => {
  const { data } = await https.post(apiPath.login, {
    email: email,
    password: password,
  });
  localStorage.setItem(userInfoKey, JSON.stringify(data.content));
  return data.content;
};

export const registerApi = async ({
  name,
  email,
  password,
  phone,
  birthday,
  gender,
}) => {
  const { data } = await https.post(apiPath.register, {
    name,
    email,
    password,
    phone,
    birthday,
    gender,
    role: "USER",
  });
  console.log(data);
  return data.content;
};
