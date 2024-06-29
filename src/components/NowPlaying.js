import { useSelector } from "react-redux";
import Cards from "./Cards";

const NowPlaying = () => {
  const nowPlayingList = useSelector(
    (store) => store.movies.nowPlayingMovies[0]
  );

  console.log(nowPlayingList);

  if (nowPlayingList && nowPlayingList.length > 0) {
    return (
      <div className="relative flex overflow-x-auto px-4 space-x-4 z-20 -mt-52 overflow-visible">
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
    );
  }
  return null;
};

export default NowPlaying;
