import { createSlice } from "@reduxjs/toolkit";

const resultsSlice = createSlice({
  name: "results",
  initialState: {
    cachedResults: {},
  },
  reducers: {
    addCachedresults: (state, action) => {
      state.cachedResults = {
        ...state.cachedResults,
        [action.payload.searchInput]: action.payload.results,
      };
    },
  },
});

export const { addCachedresults } = resultsSlice.actions;
export default resultsSlice.reducer;
