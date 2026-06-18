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
      className="
        w-[180px]
        sm:w-[200px]
        overflow-hidden
        rounded-xl
        cursor-pointer
        group
      "
    >
      <img
        src={posterUrl}
        alt="Movie Poster"
        className="
          w-full
          h-[270px]
          sm:h-[300px]
          object-cover
          rounded-xl
          transition-all
          duration-300
          group-hover:scale-105
          shadow-lg
        "
      />
    </div>
  );
};

export default MovieCard;