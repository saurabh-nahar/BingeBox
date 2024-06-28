import { cardImg } from "../utils/constants";
const Cards = ({ poster, title }) => {
  return (
    <div className="relative overflow-visible">
      <div className="relative h-[25vh] w-[200px] mx-2 rounded-lg">
        <img
          src={`${cardImg}${poster}`}
          className="w-full h-full object-cover"
          alt={title}
        />
      </div>
    </div>
  );
};

export default Cards;
