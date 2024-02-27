import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiPath } from "../constants/api_path";
import { keyUserInfo } from "../constants/constants";
import LoginForm from "../pages/auth/LoginForm";
import { https } from "../services/api";

const initialState = {};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {},
});

export const {} = authSlice.actions;

export default authSlice.reducer;

export const loginApi = async ({ email, password }) => {
  const { data } = await https.post(apiPath.login, {
    email: email,
    password: password,
  });
  localStorage.setItem(keyUserInfo, JSON.stringify(data.content));
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
