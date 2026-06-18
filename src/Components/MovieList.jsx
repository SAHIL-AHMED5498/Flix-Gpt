import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { image_cdn_url } from "../utils/constant";
import useMoviesContext from "../utils/useMoviesContext";
import { ShimmerPostItem } from "react-shimmer-effects";

const MovieList = ({ heading, type, p }) => {
  const { getMoviesList, pageNumber } = useMoviesContext();
  const [list, setList] = useState(null);

  const fetchMovie = async () => {
    try {
      const res = await getMoviesList(p, type);
      setList(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, [pageNumber]);

  if (!list) {
    return (
      <section className="px-4 sm:px-8 lg:px-12 py-3 sm:py-5">
        <div className="mb-3 text-lg sm:text-xl md:text-2xl font-semibold text-[#e5e5e5]">
          {heading}
        </div>
        <div className="netflix-rail flex gap-2 sm:gap-3 md:gap-4 overflow-x-auto pb-4 pr-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex-shrink-0 w-[140px] sm:w-[170px] md:w-[200px]">
              <ShimmerPostItem card title cta />
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="px-4 sm:px-8 lg:px-12 py-3 sm:py-5">
      <h2 className="mb-3 text-lg sm:text-xl md:text-2xl font-semibold tracking-wide text-[#e5e5e5]">
        {heading}
      </h2>
      <div className="netflix-rail flex gap-2 sm:gap-3 md:gap-4 overflow-x-auto pb-4 pr-4">
        {list.map((m) => {
          const posterUrl = `${image_cdn_url}${m.poster_path}`;
          return (
            <div key={m.id} className="flex-shrink-0">
              <MovieCard posterUrl={posterUrl} movieId={m.id} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MovieList;
