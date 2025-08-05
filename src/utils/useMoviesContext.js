import { createContext, useContext, useRef, useState} from "react";
import { options } from "./constant";



const movieContext=createContext(null);

export const MovieContextProvider=({children})=>{

     const randomNumber = useRef( Math.floor(Math.random() * 20));
     const [pageNumber,setPageNumber]=useState(1);

    let [nowMovies,setNowMovies]=useState(null);
    const [trailer,setTrailer]=useState(null);
    const [selectedMovie,setSelectedMovie]=useState(null);

    const getNowMovies=async(p)=>{
          await fetch(`https://api.themoviedb.org/3/movie/now_playing?page=${p}`, options) //FETCH NOW MOVIES
          
  .then(res => res.json()) //CONVERT TO JS OBJ
  .then(res =>{
    setNowMovies(res?.results)  //PUT NOW MOVIES OBJ TO nowMovies Variable
    
    })
  .catch(err => console.error(err));

    }  

    const getMoviesList=async(p,type)=>{

     const res= await fetch(`https://api.themoviedb.org/3/movie/${type}?page=${p}`, options);
     const json=await res.json();
     const data=await json?.results;
     return data;

    }




       const getMovieVideo=async(id)=>{
    
            try{  
         const data =await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options) //FETCH GIVEN MOVIE VIDEOS
         const json=await data.json();   //CONVERT TO JS OBJ
         
         const filteredData=json.results.filter((v)=>v.type=="Trailer");   //FILTER TO GET ONLY TRAILERS
         const trailer = filteredData.length > 0 ? filteredData[0] : json.results[0]; //EXCEPTION CASES HANDLING 
        // console.log("trailer"+JSON.stringify(trailer));
         
         console.log("fetched trailer")
         setTrailer(trailer);  //PUT FILTERED TRAILER TO trailer variable
         setSelectedMovie(trailer);
         return trailer;
        
        }
         catch(err){
            console.log("video fetching error"+err);
         }
        
    
    
    
    
    
         
        
    }

    const increasePageNumber = () => {
      if(pageNumber<19){
         setPageNumber((prev)=>prev+1)
      }
  
};

const decreasePageNumber = () => {
   if(pageNumber>1){
      setPageNumber((prev)=>prev-1)
   }
 
};
    









    return(<movieContext.Provider  value={{increasePageNumber,decreasePageNumber,pageNumber,getMoviesList,nowMovies,getNowMovies,getMovieVideo,trailer,randomNumber,selectedMovie}}>{children}</movieContext.Provider>)
}

const useMoviesContext=()=>useContext(movieContext);
export default useMoviesContext