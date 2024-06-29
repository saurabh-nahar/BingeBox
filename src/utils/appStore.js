import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import aiSearchReducer from "./aiSearchSlice";
import langConfigSlice from "./langConfigSlice";
import resultsReducer from "./resultsSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    aiSearch: aiSearchReducer,
    langConfig: langConfigSlice,
    results: resultsReducer,
  },
});

export default appStore;
