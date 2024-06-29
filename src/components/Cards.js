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
        <div className="relative h-[25vh] w-[200px] mx-2 rounded-lg">
          <img
            src={`${cardImg}${poster}`}
            className="w-full h-full object-cover cursor-pointer"
            alt={title}
            onClick={handleCardClick}
          />
        </div>
        {showPopup && (
          <TrailerPopUp
            poster={poster}
            title={title}
            id={id}
            desc={desc}
            onClose={() => setShowPopup(false)}
          />
        )}
      </div>
    );
};

export default Cards;
