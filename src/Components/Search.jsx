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
  const query = message.current?.value?.trim();

  if (!query) {
    toast.error("Please enter a valid movie name");
    return;
  }

  setShowShimmer(true);

  let toastId;

  try {
    // Step 1: Fetch AI recommendations
    toastId = toast.loading("Generating recommendations using AI...");
    const AiRecommendation = await getAIMovieList(query);
    if (!AiRecommendation || Object.keys(AiRecommendation).length === 0) {
      throw new Error("No AI recommendations found.");
    }
    toast.success("AI recommendations generated!", { id: toastId });

    // Step 2: Fetch movie data from TMDB
    toastId = toast.loading("Fetching movie details from TMDB...");
    const MList = await fetchMovies(AiRecommendation);
    if (!Array.isArray(MList) || MList.length === 0) {
      throw new Error("Could not fetch movie details.");
    }
    toast.success("Movie data fetched successfully!", { id: toastId });

    // Step 3: Update UI
    addResult(MList);

  } catch (error) {
    console.error("Error in handleClick:", error);
    toast.error(error.message || "Something went wrong.", { id: toastId });
  } finally {
    setShowShimmer(false);
  }
};
  return (

    <>
    <img src="/bg-img.svg" alt="bg-img"  className="absolute h-full w-full object-cover"/>
     <div className="top-14 text-black relative flex flex-col justify-center items-center p-2">

      

        
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

          <div className="flex overflow-x-auto  gap-3 h-40 cursor-pointer">
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
    </>
   

  );
};

export default Search;
