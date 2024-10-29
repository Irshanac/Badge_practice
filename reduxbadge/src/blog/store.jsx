import {configureStore }from '@reduxjs/toolkit'
import blogSlice from './BlogSlice'
export default configureStore({
    reducer:{
        blog:blogSlice
    }
})