import React, { useEffect } from 'react'
import Categories from './Categories'
import Header from './Header'
import NowPlayingTrailer from './NowPlayingTrailer'
import useNowPlayingMovies from '../utils/useNowPlayingMovies'
import useNowPlayingMoviesTrailer from '../utils/useNowPlayingMoviesTrailer'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies, addNowPlayingMoviesTrailer } from '../utils/moviesSlice'
import TitleDesc from './TitleDesc'

const Browse = () => {

  const dispatch = useDispatch();
  const nowPlayingData = useNowPlayingMovies();
  const firstMovieId = nowPlayingData ? nowPlayingData[0]?.id : null; 
  const nowPlayingTrailer = useNowPlayingMoviesTrailer(firstMovieId);

  useEffect(()=>{
    if(nowPlayingData && nowPlayingData.length > 0){
      console.log(nowPlayingData);
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
    <div className='absolute'>
      <Header/>
      <TitleDesc/>
      <NowPlayingTrailer/>
      <Categories/>
    </div>
  )
}

export default Browse