import { createSlice } from "@reduxjs/toolkit";

const aiSearchSlice = createSlice({
  name: "aiSearch",
  initialState: {
    aiSearchButton: false,
    aiSearchResults: [],
  },
  reducers: {
    changeAiSearchButton: (state, action) => {
      state.aiSearchButton = !state.aiSearchButton;
    },
    addAiSearchResults: (state, action) => {
      state.aiSearchResults.push(action.payload);
    },
    removeAiSearchResults: (state, action) => {
      state.aiSearchResults.length = 0;
    },
  },
});

export const {
  changeAiSearchButton,
  addAiSearchResults,
  removeAiSearchResults,
} = aiSearchSlice.actions;
export default aiSearchSlice.reducer;
