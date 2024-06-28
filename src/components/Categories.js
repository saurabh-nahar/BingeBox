import React from 'react'
import NowPlaying from './NowPlaying'
import PopularMovies from './NowPlaying'

const Categories = () => {
  return (
    <div className='absolute z-20 bg-black'>
      <NowPlaying/>
      <div className='mt-80 bg-black'>
      <PopularMovies/>
      </div>
    </div>
  )
}

export default Categories