import React from "react";
import NowPlaying from "./NowPlaying";
import PopularMovies from "./PopularMovies";

const Categories = () => {
  return (
    <div className="bg-black overflow-visible">
      <NowPlaying />
      <div className="mt-40 bg-black overflow-visible">
        <PopularMovies />
      </div>
    </div>
  );
};

export default Categories;
