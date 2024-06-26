import React, { useEffect } from 'react'
import Categories from './Categories'
import Header from './Header'
import NowPlayingTrailer from './NowPlayingTrailer'
import useNowPlayingMovies from '../utils/useNowPlayingMovies'
import useNowPlayingMoviesTrailer from '../utils/useNowPlayingMoviesTrailer'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies, addNowPlayingMoviesTrailer } from '../utils/moviesSlice'

const Browse = () => {

  const dispatch = useDispatch();
  const nowPlayingData = useNowPlayingMovies();
  const firstMovieId = nowPlayingData ? nowPlayingData[2]?.id : null; 
  const nowPlayingTrailer = useNowPlayingMoviesTrailer(firstMovieId);

  useEffect(()=>{
    if(nowPlayingData !== null){
      // console.log(nowPlayingData);
      dispatch(addNowPlayingMovies(...nowPlayingData));
    }
  },[nowPlayingData])

  useEffect(()=>{
    if(nowPlayingTrailer !== null){
      console.log(nowPlayingTrailer);
      dispatch(addNowPlayingMoviesTrailer(nowPlayingTrailer));
    }
  },[nowPlayingTrailer])


  return (
    <div>
      <Header/>
      <NowPlayingTrailer/>
      <Categories/>
    </div>
  )
}

export default Browse