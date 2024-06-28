import React, { useEffect } from "react";
import Categories from "./Categories";
import Header from "./Header";
import NowPlayingTrailer from "./NowPlayingTrailer";
import useNowPlayingMovies from "../utils/useNowPlayingMovies";
import useNowPlayingMoviesTrailer from "../utils/useNowPlayingMoviesTrailer";
import { useDispatch, useSelector } from "react-redux";
import {
  addNowPlayingMovies,
  addNowPlayingMoviesTrailer,
} from "../utils/moviesSlice";
import TitleDesc from "./TitleDesc";
import AiSearchPage from "./AiSearchPage";

const Browse = () => {
  const dispatch = useDispatch();
  const nowPlayingData = useNowPlayingMovies();
  const firstMovieId = nowPlayingData ? nowPlayingData[0]?.id : null;
  const nowPlayingTrailer = useNowPlayingMoviesTrailer(firstMovieId);
  const searchBtnStatus = useSelector((store) => store.aiSearch.aiSearchButton);
  const moviesData = useSelector((store) => store.movies.nowPlayingMovies);
  const trailerData = useSelector(
    (store) => store.movies.nowPlayingMoviesTrailer
  );

  useEffect(() => {
    if (moviesData.length > 0) return;
    if (nowPlayingData && nowPlayingData.length > 0) {
      dispatch(addNowPlayingMovies(nowPlayingData));
    }
  }, [nowPlayingData]);

  useEffect(() => {
    if (trailerData.length > 0) return;
    if (nowPlayingTrailer !== null) {
      dispatch(addNowPlayingMoviesTrailer(nowPlayingTrailer));
    }
  }, [nowPlayingTrailer]);

  return (
    <div className="relative overflow-visible">
      <Header />
      {searchBtnStatus ? (
        <AiSearchPage />
      ) : (
        <>
          <TitleDesc />
          <NowPlayingTrailer />
          <Categories />
        </>
      )}
    </div>
  );
};

export default Browse;
