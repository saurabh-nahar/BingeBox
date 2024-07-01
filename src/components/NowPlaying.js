import { useSelector } from "react-redux";
import Cards from "./Cards";

const NowPlaying = () => {
  const nowPlayingList = useSelector(
    (store) => store.movies.nowPlayingMovies[0]
  );

  if (nowPlayingList && nowPlayingList.length > 0) {
    return (
      <>
      <h1 className="absolute z-10 -mt-6  text-white mx-2 md:mx-6 text-xl md:text-3xl font-semibold ">Now Playing</h1>
      <div className="relative flex overflow-x-auto px-2 md:px-4 md:space-x-4 z-10 mt-0 md:-mt-72 overflow-visible">
        {nowPlayingList.map((item) => (
          <div key={item.id} className="">
            <Cards
              poster={item.poster_path}
              title={item.title}
              id={item.id}
              desc={item.overview}
            />
          </div>
        ))}
      </div>
      </>
    );
  }
  return null;
};

export default NowPlaying;
