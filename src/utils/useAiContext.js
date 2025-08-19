import { createContext, useContext, useRef } from "react";
import { useState } from "react";
import axios from "axios";



const aiContext=createContext();

export const AiContextProvider=({children})=>{


    const test="test data";
    const message=useRef(null);
     const TMDB_API="https://tmdb-proxy-dzjf.onrender.com/3/search/movie";
     const [results,setResult]=useState();

const getAIMovieList = async (message) => {
  try {
    const response = await axios.post(
      "https://tmdb-proxy-dzjf.onrender.com/api/ai",
      { message }, // body
      {
        withCredentials: true, // send JWT cookie
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log(response);

   // console.log("AI Suggested Movies:", response.data.reply);
    return response.data.reply; // Expected: [m1, m2, m3, m4, m5]

  } catch (err) {
    console.error("Error:", err.response?.data?.error || err.message);
  }
};
        



    const addResult=(value)=>{
    setResult(value);   
   }

const fetchMovies = async (movieList1) => {
  try {
    const promises = movieList1.map(async (title) => {
      const url = `${TMDB_API}?query=${encodeURIComponent(
        title
      )}&include_adult=false&language=en-US&page=1`;

      const res = await axios.get(url, {
        withCredentials: true, // only needed if your backend sets JWT cookies
      });

      // Optional: take only the first result if multiple are returned
      return res.data.results[0]; // or return res.data.results if you want all
    });

    const allResults = await Promise.all(promises);

    // Filter out null/undefined in case some movies were not found
    const validResults = allResults.filter(Boolean);

    return validResults;
  } catch (err) {
    console.error("Error fetching TMDB results:", err.response?.data || err.message);
  }
};






    return(<aiContext.Provider value={{test,message,getAIMovieList,fetchMovies,addResult,results}}>{children}</aiContext.Provider>) }


const useAiContextProvider=()=>useContext(aiContext);

export default useAiContextProvider;