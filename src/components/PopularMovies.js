import Cards from "./Cards";

const PopularMovies = ({popularMoviesData}) => {


    return (
      <>
      <h1 className="relative z-20 text-white mx-2 md:mx-6 text-xl md:text-3xl font-semibold ">Top Rated</h1>
      <div className=" relative z-20 flex bg-black overflow-x-scroll px-2 md:px-4 md:space-x-4">
        {popularMoviesData.map((item) => (
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
      </>
    );
};

export default PopularMovies;
