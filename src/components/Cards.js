import { useState } from "react";
import { cardImg } from "../utils/constants";
import TrailerPopUp from "./TrailerPopUp";

const Cards = ({ poster, title, id, desc }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleCardClick = () => {
    setShowPopup(true);
  };

  if (poster)
    return (
      <div className="relative overflow-visible my-6">
        <div className="relative md:h-[30vh] w-[150px] md:w-[200px] mx-2 rounded-lg">
          <img
            src={`${cardImg}${poster}`}
            className="w-full h-full object-cover cursor-pointer"
            alt={title}
            onClick={handleCardClick}
          />
        </div>
        {showPopup && (
          <div className="fixed top-0 left-0 z-50">
            <TrailerPopUp
            poster={poster}
            title={title}
            id={id}
            desc={desc}
            onClose={() => setShowPopup(false)}
          />
          </div>
        )}
      </div>
    );
};

export default Cards;
