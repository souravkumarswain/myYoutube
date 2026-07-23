import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
    name:'navbar',
    initialState:{
        navState : false
    },
    reducers:{
        showNavbar:(state) => {
            state.navState = true;
        }
    }

})

export default navSlice.reducer;
export const {showNavbar} = navSlice.actions;