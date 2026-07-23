import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        home: true,
        shorts: false,
        subscription: false,
        user: false
    },
    reducers: {
        homeButtonClicked: (state, action) => {
            state.home = action.payload;
        },
        shortsButtonClicked: (state, action) => {
            state.shorts = action.payload;
        },
        subscriptionButtonClicked: (state, action) => {
            state.subscription = action.payload;
        },
        userButtonClicked: (state, action) => {
            state.user = action.payload;
        }
    }
})

export default menuSlice.reducer;
export const { homeButtonClicked,shortsButtonClicked,subscriptionButtonClicked,userButtonClicked } = menuSlice.actions;