import React, { useEffect, useState } from "react";
import MovieList from "./MovieList";
import useMoviesContext from "../utils/useMoviesContext";
import useAiContextProvider from "../utils/useAiContext";
import { image_cdn_url } from "../utils/constant";
import MovieCard from "./MovieCard";
import { ShimmerPostItem } from "react-shimmer-effects";
import toast from "react-hot-toast";

const Search = () => {
  const [showShimmer, setShowShimmer] = useState(false);
  const { pageNumber } = useMoviesContext();
  const { test, message, getAIMovieList, fetchMovies, addResult, results } =
    useAiContextProvider();
  useEffect(() => {
    console.log(results);
  }, [results]);

  const handleClick = async () => {
    setShowShimmer(true);

    const recommendation = await getAIMovieList(message.current.value);
    const MList = await fetchMovies(recommendation);
    if (MList.length == 0) {
      toast.error("something went wrong");
    }
    addResult(MList);
  };
  return (
    <div className="top-14 relative flex flex-col text-center items-center justify-start border h-[200vh] bg-black p-4 gap-2">
      <div className="mt-14 sm:w-1/2 w-full ">
        <form className="flex " onSubmit={(e) => e.preventDefault()}>
          <input
            ref={message}
            type="text"
            placeholder="what you want to search today ?"
            className="w-9/12  outline m-2 p-2 rounded"
          />
          <button
            onClick={handleClick}
            className="m-2 p-2 bg-purple-400 rounded border w-3/12 active:scale-95 hover:border-purple-600"
          >
            Search
          </button>
        </form>
      </div>

      {results && (
        <div className="py-2 pl-2 ">
          <div className="pb-1 text-white font-sans font-bold">
            Ai Suggested Movie
          </div>

          <div className="flex overflow-x-scroll  gap-3 h-40 cursor-pointer">
            {results.map((m) => {
              const posterUrl = `${image_cdn_url}${m.poster_path}`;

              return (
                <MovieCard key={m.id} posterUrl={posterUrl} movieId={m.id} />
              );
            })}
          </div>
        </div>
      )}

      {showShimmer && !results && (
        <div className="w-full">
          <p>loading.....</p>
          <ShimmerPostItem card title cta />
        </div>
      )}

      <div>
        <MovieList
          heading={"Recommended for you "}
          type={"now_playing"}
          p={pageNumber}
        />
      </div>
    </div>
  );
};

export default Search;
