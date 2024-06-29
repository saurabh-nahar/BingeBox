import { useEffect, useState } from "react";
import { options } from "./constants";
import { tmdbVideosSearchExt, tmdbVideosSearch } from "./constants";

const useNowPlayingMoviesTrailer = (movieId) => {
  const [nowPlayingMoviesTrailer, setNowPlayingMoviesTrailer] = useState(null);
  useEffect(() => {
    const getData = async () => {
      if (!movieId) return;
      const data = await fetch(
        `${tmdbVideosSearch}${movieId}${tmdbVideosSearchExt}`,
        options
      );
      const json = await data.json();
      const filteredData = json.results.filter(
        (video) => video.type === "Trailer"
      );
      setNowPlayingMoviesTrailer(filteredData[0]);
    };
    getData();
  }, [movieId]);

  return nowPlayingMoviesTrailer;
};

export default useNowPlayingMoviesTrailer;
