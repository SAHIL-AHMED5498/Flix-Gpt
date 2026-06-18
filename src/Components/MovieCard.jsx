import React from "react";
import useMoviesContext from "../utils/useMoviesContext";

const MovieCard = ({ posterUrl, movieId }) => {
  const { getMovieVideo } = useMoviesContext();

  const handleClick = async () => {
    const video = await getMovieVideo(movieId);

    if (video?.key) {
      window.open(
        `https://www.youtube.com/watch?v=${video.key}`,
        "_blank"
      );
    } else {
      console.warn("No trailer key found.");
    }
  };

  if (!posterUrl) return null;

  return (
    <div
      onClick={handleClick}
      className="group relative w-[140px] sm:w-[170px] md:w-[200px] cursor-pointer overflow-hidden rounded-lg sm:rounded-xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.04] hover:z-30"
    >
      <img
        src={posterUrl}
        alt="Movie Poster"
        className="h-[210px] sm:h-[255px] md:h-[300px] w-full rounded-lg sm:rounded-xl object-cover shadow-[0_10px_25px_rgba(0,0,0,0.55)] transition-all duration-300 group-hover:shadow-[0_18px_35px_rgba(0,0,0,0.7)]"
      />
      <div className="pointer-events-none absolute inset-0 rounded-lg sm:rounded-xl border border-white/0 group-hover:border-white/20 transition-colors duration-300" />
    </div>
  );
};

export default MovieCard;