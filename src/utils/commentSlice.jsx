import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
    name:'comment',
    initialState:{
        userComments:[]
    },
    reducers:{
        addUserComment : (state,action) => {
            state.userComments.unshift(action.payload)
            state.userComments.splice(50,1)
        }
    }
})

export default commentSlice.reducer;
export const {addUserComment} = commentSlice.actions