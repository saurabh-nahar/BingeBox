import React, { useState, useEffect } from "react";
import NowPlaying from "./NowPlaying";
import PopularMovies from "./PopularMovies";
import { options, popularMoviesUrl } from "../utils/constants";

const Categories = () => {
  const [popularMoviesData, setPopularMoviesData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetch(popularMoviesUrl, options);
        const json = await data.json();
        setPopularMoviesData(json.results);
        console.log(json.results);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);
  return (
    <div className="bg-black overflow-visible">
      <NowPlaying />
      {popularMoviesData && <PopularMovies popularMoviesData={popularMoviesData} />}
    </div>
  );
};

export default Categories;
