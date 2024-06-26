import { useEffect, useState } from "react";
import { options } from "./constants"

const useNowPlayingMoviesTrailer = (movieId) => { 
  const [nowPlayingMoviesTrailer, setNowPlayingMoviesTrailer] = useState(null); 

//   const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTQ1NGIxMTc4MmNmYjkzY2E3ZmFiYWMzNzY2YjJlMiIsIm5iZiI6MTcxOTM2ODE4OS4yODQxMSwic3ViIjoiNjY3YjZjY2MzOTQwNWMzODJmYWE1ZGZkIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.vrT-ibFP8fB_jkTAKsXlmC7oV1ZPe8Y304A73Z7fAek'
//     }
//   };

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
