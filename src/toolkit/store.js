import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
const store=configureStore({
    reducer:{
        user:userReducer
    }
    //court:courtSlice
    //we can write multiple slices like this
})
export default store