import { useSelector } from "react-redux"
import Cards from "./Cards"

const PopularMovies = () => {
    const nowPlayingList = useSelector((store) => store.movies.nowPlayingMovies[0]);

    console.log(nowPlayingList);

    if (nowPlayingList && nowPlayingList.length > 0) {
        return (
          <div className="flex bg-black overflow-x-scroll">
            {nowPlayingList.map((item) => (
              <div key={item.id} className="flex">
                <Cards poster={item.poster_path} />
              </div>
            ))}
          </div>
        );
      }
}

export default PopularMovies