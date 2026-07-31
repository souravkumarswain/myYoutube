import { configureStore } from "@reduxjs/toolkit";
import navSliceReducer from './navSlice';
import menuSliceReducer from './menuSlice';
import searchSliceReducer from './searchSuggestionsSlice';

const store = configureStore({
   reducer:{
    nav : navSliceReducer,
    menu: menuSliceReducer,
    search: searchSliceReducer
   }
})

export default store;