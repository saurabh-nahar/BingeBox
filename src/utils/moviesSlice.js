import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:[],
        nowPlayingMoviesTrailer:[]
    },
    reducers: {
        addNowPlayingMovies: (state,action) => {
            state.nowPlayingMovies.push(action.payload);
        },
        addNowPlayingMoviesTrailer:(state,action) => {
            state.nowPlayingMoviesTrailer.push(action.payload);
        },
    }
})

export const {addNowPlayingMovies,addNowPlayingMoviesTrailer } = moviesSlice.actions;

export default moviesSlice.reducer;