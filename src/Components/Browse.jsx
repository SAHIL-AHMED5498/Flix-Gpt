import React, { useEffect, useState } from "react";
import SecondaryContainer from "./SecondaryContainer";
import useMoviesContext from "../utils/useMoviesContext";
import useUserContext from "../utils/useUserContext";
import MainContainer from "./MainContainer";
import { Thumbnail } from "../Shimmers/Thumbnail";
import { ShimmerPostItem } from "react-shimmer-effects";

const Browse = () => {
  // console.log("browse page rendered");

  const { user } = useUserContext();
  const {
    randomNumber,
    getMoviesList,
    pageNumber,
    increasePageNumber,
    decreasePageNumber,
  } = useMoviesContext();

  const [mainMovie, setMainMovie] = useState([]); //TO STORE ARRAY OF MOVIES
  // console.log(mainMovie);
  const selectedMovie = mainMovie[randomNumber.current]; //STORE ANY RANDOM MOVIE FROM MOVIE ARRAY

  useEffect(() => {
    //console.log("fetching now movies");
    const fetchMovie = async () => {
      try {
        //console.log("fetching nowMovies");
        const res = await getMoviesList(pageNumber, "now_playing"); //FETCHING MOVIES ARRAY
        setMainMovie(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMovie();
  }, [pageNumber]); //FETCH EVREYTIME ON PAGE UPDATE

  if (!mainMovie || !selectedMovie) {
    return (
      <div className="relative top-14">
        <div>Loading video..</div>
        <Thumbnail />
        <div className=" text-white font-sans font-bold">"Movie list"</div>
        <div className="flex overflow-x-scroll gap-3 h-screen">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="min-w-40 ">
              <ShimmerPostItem card title cta />
              <ShimmerPostItem card title cta />
              <ShimmerPostItem card title cta />
              <ShimmerPostItem card title cta />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!user) {
    return <div className="relative top-14">loading...</div>;
  }

  return (
    <>
      <div>
        {selectedMovie && <MainContainer mainMovie={selectedMovie} />}

        <div className="bg-gradient-to-b from-black/0 via-black/50 to-black/80 h-[1000px] w-screen"></div>

        <SecondaryContainer />

        {/* Navigation Buttons */}
        <button
          onClick={decreasePageNumber}
          className="p-3 fixed bottom-8 left-8 z-40 rounded-full backdrop-blur-lg bg-gradient-to-r from-purple-500/80 to-pink-500/60 hover:from-purple-600 hover:to-pink-600 text-white font-bold text-xl w-14 h-14 flex justify-center items-center active:scale-90 transition-all duration-300 transform hover:shadow-2xl hover:shadow-purple-500/50 border border-white/20 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span>
        </button>

        <button
          onClick={increasePageNumber}
          className="p-3 fixed bottom-8 right-8 z-40 rounded-full backdrop-blur-lg bg-gradient-to-r from-blue-500/80 to-cyan-500/60 hover:from-blue-600 hover:to-cyan-600 text-white font-bold text-xl w-14 h-14 flex justify-center items-center active:scale-90 transition-all duration-300 transform hover:shadow-2xl hover:shadow-blue-500/50 border border-white/20 group"
        >
          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </button>
      </div>
    </>
  );
};

export default Browse;
