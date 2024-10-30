import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addColor=createAsyncThunk('color/addColor',async(newDtata)=>{
    const response=await axios.post("http://localhost:3500/product",newDtata)
    return response.data
})
// export const getData=createAsyncThunk('color/getData',as)
export const colorSlice=createSlice({
    initialState:{
        color:[],
        status:null,
        error:null
    },
    name:"color",
   extraReducers:(builder)=>{
    builder.addCase(addColor.pending,(state)=>{
        state.status="loading"
    })
    builder.addCase(addColor.fulfilled,(state,action)=>{
        state.status="fullfill"
        state.color.push(action.payload)
    })
    builder.addCase(addColor.rejected,(state,action)=>{
        state.status="error"
        state.error=action.payload
    })
    }
})