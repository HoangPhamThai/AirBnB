import { createSlice } from "@reduxjs/toolkit";
import { apiPath } from "../constants/api_path";
import { https } from "../services/api";

const initialState = {};

const roomSlice = createSlice({
  name: "roomSlice",
  initialState,
  reducers: {},
});

export const {} = roomSlice.actions;

export default roomSlice.reducer;

export const getListRoomByPage = async ({
  pageId,
  keyword = "",
  pageSize = 10,
}) => {
  const { data } = await https.get(apiPath.getListRoomByPage, {
    params: {
      keyword: keyword,
      pageIndex: pageId,
      pageSize: pageSize,
    },
  });
  return data.content;
};

export const getRoomDetails = async (roomId) => {
  const { data } = await https.get(`${apiPath.getRoomDetail}/${roomId}`);
  return data.content;
};

export const getCommentByRoomId = async ({ roomId }) => {
  const { data } = await https.get(`${apiPath.getCommentByRoomId}/${roomId}`);
  return data.content;
};
