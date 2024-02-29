import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiPath } from "../constants/api_path";
import { https } from "../services/api";

const initialState = {
  listLocation: [],
};

const metadataSlice = createSlice({
  name: "metadataSlice",
  initialState,
  reducers: {
    setLocationMetadata: (state, action)=>{
        state.listLocation = action.payload
    }
  },
});

export const {setLocationMetadata} = metadataSlice.actions

export default metadataSlice.reducer;

export const getLocationMetadata = () => {
    return async (dispatch) => {
        const {data} = await https.get(apiPath.getAllLocation)
        dispatch(setLocationMetadata(data.content))
    }
}