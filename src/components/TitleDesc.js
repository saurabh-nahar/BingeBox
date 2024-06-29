import React from "react";
import { useSelector } from "react-redux";

const TitleDesc = () => {
  const data = useSelector((store) => store.movies.nowPlayingMovies[0]);

  if (data)
    return (
      <div className="absolute z-20 w-full h-full bg-gradient-to-r from-black/60 via-black/30 to-transparent">
        <h2 className=" pt-[30vh] mx-6 text-4xl font-semibold font text-white">
          {data[0].original_title}
        </h2>
        <p className="mx-6 w-[30vw] mt-4 text-2xl font-thin text-white">
          {data[0].overview}
        </p>
        <div>
          <button className="px-10 py-4 mx-6 rounded-md mt-4 text-2xl font-medium bg-white text-black hover:bg-gray-200">
            ▶️ Play
          </button>
          <button className="px-12 py-4 mx-2 rounded-md mt-4 text-2xl font-medium bg-gray-400 bg-opacity-50 text-white hover:bg-opacity-30">
            More Info
          </button>
        </div>
      </div>
    );
};

export default TitleDesc;
