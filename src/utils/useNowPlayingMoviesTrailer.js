import { useEffect, useState } from "react";
// import { options } from "./constants"

const useNowPlayingMoviesTrailer = (movieId) => { 
  const [nowPlayingMoviesTrailer, setNowPlayingMoviesTrailer] = useState(null); 


  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzY2U1NjljYzMwYTAxYWYzZGNhNThhMGUyYjk2NDBiNCIsIm5iZiI6MTcxOTQ0MTU5Ni45MzgxMTksInN1YiI6IjY2N2I2Y2NjMzk0MDVjMzgyZmFhNWRmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D3vF7JAvpoNRZcBVILSTc9sZhGuKokOKrcOb1XL5WCs`
    }
  }
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
