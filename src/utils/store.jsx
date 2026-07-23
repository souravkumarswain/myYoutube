import { configureStore } from "@reduxjs/toolkit";
import navSliceReducer from './navSlice'

const store = configureStore({
   reducer:{
    nav : navSliceReducer 
   }
})

export default store;