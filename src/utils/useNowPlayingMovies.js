import { useEffect, useState } from "react";
import { nowPlayingUrl } from "./constants"
// import { options } from "./constants"

const useNowPlayingMovies = ()=> {

    const [nowPlayingMovies, setNowPlayingMovies] = useState(null);

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzY2U1NjljYzMwYTAxYWYzZGNhNThhMGUyYjk2NDBiNCIsIm5iZiI6MTcxOTQ0MTU5Ni45MzgxMTksInN1YiI6IjY2N2I2Y2NjMzk0MDVjMzgyZmFhNWRmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D3vF7JAvpoNRZcBVILSTc9sZhGuKokOKrcOb1XL5WCs`
      }
    }
    useEffect(()=>{
        const getData = async()=> {
          try{
            const data = await fetch(nowPlayingUrl, options);
            const json = await data.json();
            console.log(json.results);
            setNowPlayingMovies(json.results);
          }catch(err){
            console.log(err);
          }
        }
        getData();
    },[])

        return nowPlayingMovies;
}

export default useNowPlayingMovies;