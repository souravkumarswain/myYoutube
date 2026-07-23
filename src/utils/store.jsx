import { configureStore } from "@reduxjs/toolkit";
import navSliceReducer from './navSlice';
import menuSliceReducer from './menuSlice'

const store = configureStore({
   reducer:{
    nav : navSliceReducer,
    menu: menuSliceReducer 
   }
})

export default store;