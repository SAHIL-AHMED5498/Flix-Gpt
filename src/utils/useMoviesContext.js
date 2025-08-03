import { createContext, useContext, useState } from "react";
import { options } from "./constant";



const movieContext=createContext(null);

export const MovieContextProvider=({children})=>{

    let [nowMovies,setNowMovies]=useState(null);

    const getNowMovies=async(p)=>{
          await fetch(`https://api.themoviedb.org/3/movie/now_playing?page=${p}`, options)
  .then(res => res.json())
  .then(res =>{
    setNowMovies(res?.results)
    //console.log(res)
    })
  .catch(err => console.error(err));

    }  




    




    return(<movieContext.Provider  value={{nowMovies,getNowMovies}}>{children}</movieContext.Provider>)
}

const useMoviesContext=()=>useContext(movieContext);
export default useMoviesContext