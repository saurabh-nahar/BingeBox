import Cards from "./Cards";

const UpcomingMovies = ({upcomingMoviesData}) => {


    return (
      <>
      <h1 className="relative text-white mx-2 md:mx-6 text-xl md:text-3xl font-semibold ">Upcoming Movies</h1>
      <div className=" relative flex bg-black overflow-x-scroll px-2 md:px-4 md:space-x-4">
        {upcomingMoviesData.map((item) => (
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

export default UpcomingMovies;
