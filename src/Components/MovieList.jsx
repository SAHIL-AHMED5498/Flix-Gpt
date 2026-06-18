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
      <div className="py-4 px-4">
        <div className="pb-3 text-white font-bold text-xl">
          {heading}
        </div>

        <div className="flex gap-4 overflow-x-auto scrollbar-hide">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex-shrink-0 w-[180px]">
              <ShimmerPostItem card title cta />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="py-6 px-4">
      <h2 className="pb-4 text-white font-bold text-2xl">
        {heading}
      </h2>

      <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4">
        {list.map((m) => {
          const posterUrl = `${image_cdn_url}${m.poster_path}`;

          return (
            <div
              key={m.id}
              className="flex-shrink-0"
            >
              <MovieCard
                posterUrl={posterUrl}
                movieId={m.id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieList;