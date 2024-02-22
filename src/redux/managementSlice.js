import { createSlice } from '@reduxjs/toolkit'
import { apiPath } from '../constants/api_path';
import { https } from '../services/api';

const initialState = {
    listUser: []
}

const managementSlice = createSlice({
  name: "managementSlice",
  initialState,
  reducers: {}
});

export const {} = managementSlice.actions

export default managementSlice.reducer

export const getListUserByPage = async ({pageId, pageSize}) => {
    const {data} = await https.get(apiPath.getListUserByPage, {
        params:{
            pageIndex: pageId,
            pageSize: pageSize
        }
    })
    console.log(data)
    return data.content
}