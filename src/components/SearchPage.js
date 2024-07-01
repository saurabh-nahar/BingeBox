import React from "react";
import Cards from "./Cards";

const SearchPage = ({ focus, results }) => {
  const handleFocus = () => {
    focus();
  };
  return (
    <div className="fixed top-24 z-50 w-full h-full bg-black overflow-y-auto">
      <button
        onClick={handleFocus}
        className="fixed top-24 p-4 right-10 cursor-pointer text-white"
      >
        x
      </button>
      <div className="flex flex-wrap justify-start mx-6 my-6">
        {results.map((item) => (
          <Cards
            key={item.id}
            poster={item.poster_path}
            title={item.title}
            id={item.id}
            desc={item.overview}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
