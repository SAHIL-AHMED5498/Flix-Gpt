import React, { useEffect, useState } from 'react'
import SecondaryContainer from "./SecondaryContainer"
import useMoviesContext from '../utils/useMoviesContext';
import useUserContext from "../utils/useUserContext"
import MainContainer from './MainContainer';

const Browse = () => {
  console.log("browse page rendered");

 const {user}=useUserContext();
  const {randomNumber,getMoviesList,pageNumber,increasePageNumber,decreasePageNumber}=useMoviesContext();

   const [mainMovie,setMainMovie]=useState([]);
  // console.log(mainMovie);

 

  useEffect(()=>{

    console.log("fetching now movies");
      const fetchMovie=async()=>{
    try{
     console.log("fetching nowMovies");
        const res=await getMoviesList(pageNumber,"now_playing");
         setMainMovie(res);
         
   


    }
    catch(err){
      console.log(err);
    }
  
  }
    fetchMovie();


  },[pageNumber])

  




if(!user){
  return(<div className='relative top-14'>loading...</div>)
}

const selectedMovie=mainMovie[randomNumber.current];
//top-14 relative

  return (

    <>
    <div className='relative top-14' >
      
    {selectedMovie&&<MainContainer mainMovie={selectedMovie}/>}
    <div className='bg-black h-screen w-screen'></div>

    <SecondaryContainer/>

    
        
         <button onClick={decreasePageNumber} className='p-2 m-2 bg-purple-400 opacity-40 w-12 h-8 flex justify-center items-center z-40 fixed bottom-0 left-6 rounded active:scale-90 rotate-180 active:opacity-100 '>➜</button>
      
         <button onClick={increasePageNumber} className='p-2 m-2 bg-red-400 opacity-40 w-12 h-8 flex justify-center items-center z-40 fixed bottom-0 right-6 rounded active:scale-90 active:opacity-100'>➜</button>


      



   
    </div>

 
    </>
    
  )
}

export default Browse
