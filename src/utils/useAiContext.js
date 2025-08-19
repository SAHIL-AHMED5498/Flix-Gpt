import { createContext, useContext, useRef } from "react";
import { useState } from "react";
import { BACKEND_URL } from "./constant";



const aiContext=createContext();

export const AiContextProvider=({children})=>{


    const test="test data";
    const message=useRef(null);
     const TMDB_API="https://tmdb-proxy-dzjf.onrender.com/3/search/movie";
     const [results,setResult]=useState();

      const getAIMovieList = async (message) => {
  try {
    const response = await fetch(BACKEND_URL+"/api/ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "internal-key":"SAHIL54985498" 
      },
      body: JSON.stringify({
        message: `${message}`,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to fetch from /api/ai");
    }

    console.log("AI Suggested Movies:", data.reply); // Expected: [m1, m2, m3, m4, m5]
    return data.reply;

  } catch (err) {
    console.error("Error:", err.message);
  }
};
        



    const addResult=(value)=>{
    setResult(value);   
   }

    const fetchMovies = async (movieList1) => {
    try {
      const promises = movieList1.map(async (title) => {
        const url = `${TMDB_API}?query=${encodeURIComponent(title)}&include_adult=false&language=en-US&page=1`;

        const res = await fetch(url);

        const data = await res.json();

        // Optional: take only the first result if multiple are returned
        return data.results[0]; // or return full data.results if you want all
      });

      const allResults = await Promise.all(promises);

      // Filter out null/undefined in case some movies were not found
      const validResults = allResults.filter(Boolean);

       return validResults;
    } catch (err) {
      console.error("Error fetching TMDB results:", err);
    }
  };






    return(<aiContext.Provider value={{test,message,getAIMovieList,fetchMovies,addResult,results}}>{children}</aiContext.Provider>) }


const useAiContextProvider=()=>useContext(aiContext);

export default useAiContextProvider;