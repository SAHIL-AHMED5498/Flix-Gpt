import { createContext, useContext, useRef, useState } from "react";
import axios from "axios";

const movieContext = createContext(null);

export const MovieContextProvider = ({ children }) => {
  const randomNumber = useRef(Math.floor(Math.random() * 20));
  const [pageNumber, setPageNumber] = useState(1);

  let [nowMovies, setNowMovies] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const getNowMovies = async (p) => {
    try {
      const res = await fetch(
        `https://tmdb-proxy-dzjf.onrender.com/3/movie/now_playing?page=${p}`
      );
      const json = await res.json();
      setNowMovies(json?.results);
    } catch (err) {
      console.error("getNowMovies error:", err);
    }
  };

  const getMoviesList = async (p, type) => {
    try {
      const res = await axios.get(
        `https://tmdb-proxy-dzjf.onrender.com/3/movie/${type}?page=${p}`
      );
      console.log(res);
      return res.data.results;
    } catch (err) {
      console.log(`getMovieList error ${err.message}`);
    }
  };

  const getMovieVideo = async (id) => {
    try {
      const data = await fetch(
        `https://tmdb-proxy-dzjf.onrender.com/3/movie/${id}/videos?language=en-US`
      );
      const json = await data.json();

      const filteredData = json.results.filter((v) => v.type === "Trailer");
      const trailer =
        filteredData.length > 0 ? filteredData[0] : json.results[0];

      setTrailer(trailer);
      setSelectedMovie(trailer);
      return trailer;
    } catch (err) {
      console.log("video fetching error " + err);
    }
  };

  const increasePageNumber = () => {
    if (pageNumber < 19) {
      setPageNumber((prev) => prev + 1);
    }
  };

  const decreasePageNumber = () => {
    if (pageNumber > 1) {
      setPageNumber((prev) => prev - 1);
    }
  };

  return (
    <movieContext.Provider
      value={{
        increasePageNumber,
        decreasePageNumber,
        pageNumber,
        getMoviesList,
        nowMovies,
        getNowMovies,
        getMovieVideo,
        trailer,
        randomNumber,
        selectedMovie,
      }}
    >
      {children}
    </movieContext.Provider>
  );
};

const useMoviesContext = () => useContext(movieContext);
export default useMoviesContext;
