import { useEffect, useState } from "react";
import useNowPlayingMoviesTrailer from "../utils/useNowPlayingMoviesTrailer";

const TrailerPopUp = ({ title, id, desc, onClose }) => {
  const [keyId, setKeyId] = useState(null);

  const data = useNowPlayingMoviesTrailer(id);

  useEffect(() => {
    if (data) {
      setKeyId(data.key);
      console.log(keyId);
    }
  }, [data]);
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex flex-col justify-center items-center z-50">
      <div className="relative z-50 w-3/4 h-[80vh] bg-black text-white p-8 rounded-lg overflow-hidden">
        <button
          className="absolute z-50 top-4 right-4 text-2xl"
          onClick={onClose}
        >
          ×
        </button>
        <h1 className="text-3xl mb-4 text-red-600">{title}</h1>
        <p className="mb-4">{desc}</p>
        <div className="w-full h-full flex justify-center">
          <iframe
            className="w-3/4 h-3/4"
            src={`https://www.youtube.com/embed/${keyId}?autoplay=1&mute=1&cc_load_policy=3`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default TrailerPopUp;
