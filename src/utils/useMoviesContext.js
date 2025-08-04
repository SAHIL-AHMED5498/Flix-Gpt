import { createContext, useContext, useRef, useState} from "react";
import { options } from "./constant";



const movieContext=createContext(null);

export const MovieContextProvider=({children})=>{

     const randomNumber = useRef( Math.floor(Math.random() * 20));
    

    let [nowMovies,setNowMovies]=useState(null);

    const [trailer,setTrailer]=useState(null);

    const getNowMovies=async(p)=>{
          await fetch(`https://api.themoviedb.org/3/movie/now_playing?page=${p}`, options)
  .then(res => res.json())
  .then(res =>{
    setNowMovies(res?.results)
    
    })
  .catch(err => console.error(err));

    }  




       const getMovieVideo=async(id)=>{
    
            try{  
         const data =await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
         const json=await data.json();
         //console.log(json); //list of movie videos
         const filteredData=json.results.filter((v)=>v.type=="Trailer");
         const trailer = filteredData.length > 0 ? filteredData[0] : json.results[0];
         console.log("trailer"+JSON.stringify(trailer));
         //console.log("json.result[0]"+JSON.stringify(json.results[0]));
         console.log("fetched trailer")
         setTrailer(trailer);
        
        }
         catch(err){
            console.log("video fetching error"+err);
         }
        
    
    
    
    
    
         
        
    }
    









    return(<movieContext.Provider  value={{nowMovies,getNowMovies,getMovieVideo,trailer,randomNumber}}>{children}</movieContext.Provider>)
}

const useMoviesContext=()=>useContext(movieContext);
export default useMoviesContext