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

export const getListUserByPage = async ({pageId, keyword='', pageSize=10}) => {
    const {data} = await https.get(apiPath.getListUserByPage, {
        params:{
            keyword: keyword,
            pageIndex: pageId,
            pageSize: pageSize
        }
    })
    return data.content
}

export const deleteUser = async (userId) => {
    console.log(userId)
    const {response} = await https.delete(apiPath.userManagement, {
        params: {
            id: userId
        }
    })
    console.log(response)
    return response.message
}