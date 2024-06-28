import { useSelector } from "react-redux"
import Cards from "./Cards"


const NowPlaying = () => {

    const nowPlayingList = useSelector((store) => store.movies.nowPlayingMovies[0]);

    console.log(nowPlayingList);

    if (nowPlayingList && nowPlayingList.length > 0) {
        return (
            <>
            <div className=" flex -mt-48 overflow-x-scroll">
            {nowPlayingList.map((item) => (
              <div key={item.id} className="">
                <Cards poster={item.poster_path} />
              </div>
            ))}
          </div>
            </>
        );
      }
}

export default NowPlaying