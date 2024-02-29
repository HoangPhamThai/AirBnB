import { createSlice } from '@reduxjs/toolkit'
import { apiPath } from '../constants/api_path';
import { https } from '../services/api';

const initialState = {
    listLocation: []
}

const locationSlice = createSlice({
  name: "locationSlice",
  initialState,
  reducers: {}
});

export const {} = locationSlice.actions

export default locationSlice.reducer

export const getListLocationByPage = async ({pageId, keyword='', pageSize = 10}) => {
    const {data} = await https.get(apiPath.getListLocationByPage, {
        params: {
            keyword: keyword,
            pageIndex: pageId,
            pageSize: pageSize
        }
    })
    return data.content
}