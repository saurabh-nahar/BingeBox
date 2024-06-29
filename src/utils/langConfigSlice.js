import { createSlice } from "@reduxjs/toolkit";

const langConfigSlice = createSlice({
  name: "langConfig",
  initialState: {
    language: "en",
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { changeLanguage } = langConfigSlice.actions;

export default langConfigSlice.reducer;
