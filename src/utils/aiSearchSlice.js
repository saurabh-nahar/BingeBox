import { createSlice } from "@reduxjs/toolkit";

const aiSearchSlice = createSlice({
    name: "aiSearch",
    initialState:{
        aiSearchButton: false
    },
    reducers:{
        changeAiSearchButton: (state, action) => {
            state.aiSearchButton = !state.aiSearchButton
        }
    }
})

export const {changeAiSearchButton} = aiSearchSlice.actions;
export default aiSearchSlice.reducer;