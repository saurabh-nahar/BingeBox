import { useSelector } from "react-redux";


const NowPlayingTrailer = () => {

    const videoID = useSelector((store) =>  store.movies.nowPlayingMoviesTrailer[0])
    const key = videoID?.key;
    console.log(key);

    if(key) {
        return (
            <div className="relative w-screen">
                <iframe className="w-screen aspect-video"
  src={`https://www.youtube.com/embed/${key}?autoplay=1&mute=1`}
//   title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//   referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
></iframe>

            </div>
            )
    }else{
        return(
            <div>Loading...</div>
        )
    }
}

export default NowPlayingTrailer;