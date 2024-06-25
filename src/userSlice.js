import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState:{
        userInfo: []
    },
    reducers:{
        addUser: (state, action) =>{
            state.userInfo.push(action.payload);
        },
        removeUser: (state, action) =>{
            state.userInfo = [];
        }
    }

});


export const {addUser, removeUser} = userSlice.actions;

export default userSlice.reducer;