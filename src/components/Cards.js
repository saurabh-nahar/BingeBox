import React from 'react'

const Cards = ({poster}) => {
  return (
    <div className='w-[20vw] h-[26vh] mx-4 rounded-lg hover:w-[30vw] hover:h-[39vh] '>
      <img  src={`https://image.tmdb.org/t/p/w400/${poster}`} className='w-full h-full object-cover'></img>
    </div>
  )
}

export default Cards