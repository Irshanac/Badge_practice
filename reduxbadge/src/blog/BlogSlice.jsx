import React from 'react'
import { createSlice } from '@reduxjs/toolkit'
export const blogSlice=createSlice({
    "name":"blog",
    initialState:{
        blog:[]
    },
    reducers:{
        adddblog:(state,action)=>{
            const newData={id:state.blog.length+1,...action.payload}
            state.blog.push(newData)
        },
        deleteblog:(state,action)=>{
            console.log(action.payload);
            state.blog=state.blog.filter((blog)=>blog.id!==Number(action.payload))
        }
    }
})
export const {adddblog,deleteblog}=blogSlice.actions
export default blogSlice.reducer
