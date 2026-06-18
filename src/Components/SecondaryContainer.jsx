import useMoviesContext from "../utils/useMoviesContext";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const { pageNumber } = useMoviesContext();

  const newPageNumber = pageNumber + 2;

  if (!true) {
    return <div>Loading Movie Lists....</div>;
  }

  return (
    <section className="relative z-20 -mt-24 sm:-mt-32 lg:-mt-40">
      <div className="w-full bg-gradient-to-b from-transparent via-[#141414]/95 to-[#141414] pt-6 sm:pt-10">
        <MovieList heading={"Now Playing Movies"} type={"now_playing"} p={pageNumber} />
        <MovieList heading={"Trending"} type={"top_rated"} p={pageNumber} />
        <MovieList heading={"Popular"} type={"popular"} p={pageNumber} />
        <MovieList heading={"Upcoming"} type={"upcoming"} p={pageNumber} />

        <MovieList heading={"Now Playing Movies"} type={"now_playing"} p={newPageNumber} />
        <MovieList heading={"Trending"} type={"top_rated"} p={newPageNumber} />
        <MovieList heading={"Popular"} type={"popular"} p={newPageNumber} />
        <MovieList heading={"Upcoming"} type={"upcoming"} p={newPageNumber} />
      </div>
    </section>
  );
};

export default SecondaryContainer;
