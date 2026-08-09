import { configureStore } from "@reduxjs/toolkit";
import navSliceReducer from './navSlice';
import menuSliceReducer from './menuSlice';
import searchSliceReducer from './searchSuggestionsSlice';
import commentReducer from './commentSlice'

const store = configureStore({
   reducer:{
    nav : navSliceReducer,
    menu: menuSliceReducer,
    search: searchSliceReducer,
    comment:commentReducer
   }
})

export default store;