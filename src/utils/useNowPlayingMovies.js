import { useEffect, useState } from "react";
import { nowPlayingUrl } from "./constants";
import { options } from "./constants";

const useNowPlayingMovies = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetch(nowPlayingUrl, options);
        const json = await data.json();
        setNowPlayingMovies(json.results);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  return nowPlayingMovies;
};

export default useNowPlayingMovies;
