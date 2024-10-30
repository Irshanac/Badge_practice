import { configureStore } from "@reduxjs/toolkit";
import  colorSlice  from "./ColorSlice";
export default configureStore({
    reducer:{
        color:colorSlice
    }
})