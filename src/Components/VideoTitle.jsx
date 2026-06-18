import React from "react";
import useMoviesContext from "../utils/useMoviesContext";

const VideoTitle = ({ title, overview }) => {
  const { trailer } = useMoviesContext();

  const handleClick = () => {
    if (trailer?.key) {
      window.open(`https://www.youtube.com/watch?v=${trailer.key}`, "_blank");
    }
  };

  const handleClick2 = (movieName) => {
    const query = encodeURIComponent(`${movieName} site:en.wikipedia.org`);
    const url = `https://www.google.com/search?q=${query}`;
    window.open(url, "_blank");
  };

  return (
    <div className="absolute inset-0 z-10 flex items-end sm:items-center">
      <div className="w-full px-4 pb-20 sm:px-8 md:px-12 lg:px-16 sm:pb-0">
        <div className="max-w-[700px] animate-[fadeInUp_0.7s_ease-out]">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mt-4 hidden max-w-[620px] text-sm leading-relaxed text-[#d2d2d2] sm:block md:text-base">
            {overview}
          </p>
        </div>
        <div className="mt-6 flex items-center gap-3 sm:gap-4">
          <button
            className="rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-black transition-all duration-200 hover:bg-white/90 sm:px-7 sm:py-3 sm:text-base"
            onClick={handleClick}
          >
            ▶ Play
          </button>
          <button
            className="rounded-md bg-[#6d6d6eb3] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#7d7d7ecb] sm:px-7 sm:py-3 sm:text-base"
            onClick={() => handleClick2(title)}
          >
            ℹ More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
