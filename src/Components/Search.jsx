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
      <img
        src="/bg-img.svg"
        alt="bg-img"
        className="absolute h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-purple-900/20 to-black/50"></div>

      <div className="top-14 relative flex flex-col justify-center items-center p-4 min-h-screen">
        <div className="mt-20 sm:w-1/2 w-full z-10">
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              ref={message}
              type="text"
              placeholder="Describe a movie you're looking for..."
              className="flex-1 p-4 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-300 outline-none focus:border-purple-400 focus:bg-white/20 focus:shadow-lg focus:shadow-purple-500/30 transition-all duration-300"
            />
            <button
              onClick={handleClick}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg font-bold border border-purple-400/50 active:scale-95 transition-all duration-300 transform hover:shadow-lg hover:shadow-purple-500/50"
            >
              ⚡ Search
            </button>
          </form>
        </div>

        {results && (
          <div className="py-8 px-4 w-full max-w-6xl z-10 animate-[fadeInUp_0.6s_ease-out]">
            <h2 className="pb-4 text-white font-sans font-bold text-xl sm:text-2xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              ✨ AI Suggested Movies
            </h2>

            <div className="flex overflow-x-auto gap-4 h-48 cursor-pointer pb-4">
              {results.map((m, index) => {
                const posterUrl = `${image_cdn_url}${m.poster_path}`;

                return (
                  <div key={m.id} className='flex-shrink-0 animate-[slideInRight_0.6s_ease-out]' style={{animationDelay: `${index * 50}ms`}}>
                    <MovieCard posterUrl={posterUrl} movieId={m.id} />
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {showShimmer && !results && (
          <div className="w-full max-w-6xl mt-12 z-10">
            <p className="text-white text-lg animate-pulse">Loading AI recommendations...</p>
            <div className="flex gap-4 mt-6">
              {[...Array(4)].map((_, i) => (
                <ShimmerPostItem key={i} card title cta />
              ))}
            </div>
          </div>
        )}

        <div className="w-full max-w-6xl z-10">
          <MovieList
            heading={"Recommended For You"}
            type={"now_playing"}
            p={pageNumber}
          />
        </div>
      </div>
    </>
  );
};

export default Search;
