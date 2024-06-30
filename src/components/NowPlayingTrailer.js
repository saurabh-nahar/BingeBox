import { useSelector } from "react-redux";

const NowPlayingTrailer = () => {
  const videoID = useSelector(
    (store) => store.movies.nowPlayingMoviesTrailer[0]
  );
  const key = videoID?.key;

  if (key) {
    return (
      <div className="relative z-10 w-screen overflow-visible lg:mt-0 md:mt-0 mt-8">
        <iframe
          className="w-screen aspect-video"
          src={`https://www.youtube.com/embed/${key}?autoplay=1&mute=1&cc_load_policy=3`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default NowPlayingTrailer;
