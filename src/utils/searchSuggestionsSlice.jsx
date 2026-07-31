import { createSlice } from "@reduxjs/toolkit";

const searchSuggestionsSlice = createSlice({
    name:'search',
    initialState:{
        showSuggestions:[],
        showSuggestionBox:false
    },
    reducers:{
        showSearchSuggestions:(state,action) => {
            state.showSuggestions = action.payload
        },
        setShowSuggestionBox:(state,action) => {
            state.showSuggestionBox = action.payload
        }
    }
})

export default searchSuggestionsSlice.reducer;
export const {showSearchSuggestions,setShowSuggestionBox} = searchSuggestionsSlice.actions; 