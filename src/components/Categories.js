import React, { useState, useEffect } from "react";
import NowPlaying from "./NowPlaying";
import PopularMovies from "./PopularMovies";
import UpcomingMovies from "./UpcomingMovies"
import { options, popularMoviesUrl, upcomingMoviesUrl } from "../utils/constants";

const Categories = () => {
  const [popularMoviesData, setPopularMoviesData] = useState(null);
  const [upcomingMoviesData, setUpcomingMoviesData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetch(popularMoviesUrl, options);
        const json = await data.json();
        setPopularMoviesData(json.results);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetch(upcomingMoviesUrl, options);
        const json = await data.json();
        setUpcomingMoviesData(json.results);
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
      {upcomingMoviesData && <UpcomingMovies upcomingMoviesData={upcomingMoviesData} />}
    </div>
  );
};

export default Categories;
