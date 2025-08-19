import React, { useEffect, useState } from 'react'
import SecondaryContainer from "./SecondaryContainer"
import useMoviesContext from '../utils/useMoviesContext';
import useUserContext from "../utils/useUserContext"
import MainContainer from './MainContainer';
import { Thumbnail } from '../Shimmers/Thumbnail';
import { ShimmerPostItem } from 'react-shimmer-effects';
import toast, { Toaster } from 'react-hot-toast';


const Browse = () => {
  console.log("browse page rendered");
  

 const {user}=useUserContext();
  const {randomNumber,getMoviesList,pageNumber,increasePageNumber,decreasePageNumber}=useMoviesContext();

   const [mainMovie,setMainMovie]=useState([]); //TO STORE ARRAY OF MOVIES
  // console.log(mainMovie);
  const selectedMovie=mainMovie[randomNumber.current]; //STORE ANY RANDOM MOVIE FROM MOVIE ARRAY

 

  useEffect(()=>{

    console.log("fetching now movies");
      const fetchMovie=async()=>{
    try{
     console.log("fetching nowMovies");
        const res=await getMoviesList(pageNumber,"now_playing"); //FETCHING MOVIES ARRAY
         setMainMovie(res);
         
   


    }
    catch(err){
      console.log(err);
    }
  
  }
    fetchMovie();


  },[pageNumber]) //FETCH EVREYTIME ON PAGE UPDATE

  

if(!mainMovie || !selectedMovie){

  return(<div className='relative top-14'>
  <div>Loading video..</div>
  <Thumbnail/>
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
</div>)


}


if(!user){
  return(<div className='relative top-14'>loading...</div>)
}


//top-14 relative

  return (

    <>
    <div className='relative top-14' >
      
    {selectedMovie&&<MainContainer mainMovie={selectedMovie}/>}

    <div className='bg-black h-[1000px] w-screen'></div>

    <SecondaryContainer/>

         <button onClick={decreasePageNumber} className='p-2 m-2 bg-purple-400 opacity-40 w-12 h-8 flex justify-center items-center z-40 fixed bottom-0 left-6 rounded active:scale-90 rotate-180 active:opacity-100 '>➜</button>
         <button onClick={increasePageNumber} className='p-2 m-2 bg-red-400 opacity-40 w-12 h-8 flex justify-center items-center z-40 fixed bottom-0 right-6 rounded active:scale-90 active:opacity-100'>➜</button>


      
    


   
    </div>

 
    </>
    
  )
}

export default Browse
