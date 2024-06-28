import { useEffect, useState } from "react";
// import { options } from "./constants"

const useNowPlayingMoviesTrailer = (movieId) => { 
  const [nowPlayingMoviesTrailer, setNowPlayingMoviesTrailer] = useState(null); 

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: process.env.REACT_APP_TMDB_API_READ_ACCESS
    }
  };
  useEffect(() => {
    const getData = async () => {
      if (!movieId) return; 
      const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, options);
      const json = await data.json();
      const filteredData = json.results.filter((video) => video.type === "Trailer")
      setNowPlayingMoviesTrailer(filteredData[0]);
    };
    getData();
  }, [movieId]);

  return nowPlayingMoviesTrailer; 
};

export default useNowPlayingMoviesTrailer;
