import React, { useEffect, useState } from "react";
import SecondaryContainer from "./SecondaryContainer";
import useMoviesContext from "../utils/useMoviesContext";
import useUserContext from "../utils/useUserContext";
import MainContainer from "./MainContainer";
import Footer from "./Footer";
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
      <div className="min-h-screen bg-[#141414] pt-20">
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
    return <div className="min-h-screen bg-[#141414] pt-20">loading...</div>;
  }

  return (
    <>
      <div className="relative min-h-screen overflow-x-hidden bg-[#141414] text-white">
        {selectedMovie && <MainContainer mainMovie={selectedMovie} />}

        <SecondaryContainer />
        <Footer />

        <button
          onClick={decreasePageNumber}
          className="fixed bottom-8 left-4 sm:left-8 z-40 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-white/25 bg-black/60 text-2xl font-bold text-white backdrop-blur-md transition-all duration-200 hover:bg-black/85 active:scale-95"
        >
          ←
        </button>

        <button
          onClick={increasePageNumber}
          className="fixed bottom-8 right-4 sm:right-8 z-40 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-white/25 bg-black/60 text-2xl font-bold text-white backdrop-blur-md transition-all duration-200 hover:bg-black/85 active:scale-95"
        >
          →
        </button>
      </div>
    </>
  );
};

export default Browse;
