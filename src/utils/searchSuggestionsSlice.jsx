import { createSlice } from "@reduxjs/toolkit";

const searchSuggestionsSlice = createSlice({
    name:'search',
    initialState:{
        showSuggestions:{},
        showSuggestionBox:false,
        searchKey:""
    },
    reducers:{
        showSearchSuggestions:(state,action) => {
            state.showSuggestions = Object.assign(state.showSuggestions,action.payload)
        },
        setShowSuggestionBox:(state,action) => {
            state.showSuggestionBox = action.payload
        },
        addSearchKey:(state,action) => {
            state.searchKey = action.payload
        }
    }
})

export default searchSuggestionsSlice.reducer;
export const {showSearchSuggestions,setShowSuggestionBox,addSearchKey} = searchSuggestionsSlice.actions; 