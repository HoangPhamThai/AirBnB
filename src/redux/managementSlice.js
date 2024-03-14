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
    const response = await https.delete(apiPath.userManagement, {
        params: {
            id: userId
        }
    })
    console.log(response)
    return response.message
}

export const addNewUser = async ({name, email, password, phone, birthday, gender, role}) =>{
    const response = await https.post(apiPath.userManagement, {
        name, email, password, phone, birthday, gender, role
    })
    return response.data
}

export const updateUser = async ({id, name, email, password, phone, birthday, gender, role}) =>{
    const response = await https.put(apiPath.userManagement + `/${id}`, {
        name, email, password, phone, birthday, gender, role
    })
    return response.data
}

export const addNewLocation = async ({locationName, province, country, image}) =>{
    const response = await https.post(apiPath.locationManagement, {
        tenViTri: locationName,
        tinhThanh: province,
        quocGia: country,
        hinhAnh: image
    })
    return response.data
}

export const updateLocation = async ({id, locationName, province, country, image}) =>{
    const response = await https.put(apiPath.locationManagement + `/${id}`, {
        tenViTri: locationName,
        tinhThanh: province,
        quocGia: country,
        hinhAnh: image
    })
    return response.data
}

export const deleteLocation = async (id) => {
    
    const response = await https.delete(apiPath.locationManagement, {
        params: {
            id
        }
    })
    console.log(response)
    return response.message
}