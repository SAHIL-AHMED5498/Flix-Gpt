import React, { useEffect, useState } from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import useMoviesContext from '../utils/useMoviesContext'
import { Thumbnail } from '../Shimmers/Thumbnail'

const MainContainer = ({mainMovie}) => {
  //console.log("maincontainer rendered")



  const {getMovieVideo}=useMoviesContext(); //GET SELECTED MOVIE TRAILER
  const [mainTrailer,setMainTrailer]=useState(null); //STORE TRAILER 

   useEffect(()=>{

      const fetchMovie=async()=>{
    
     const res= await getMovieVideo(mainMovie.id);
     setMainTrailer(res);
      

  }
  fetchMovie();
   }
    
  ,[mainMovie.id]) //FETCH EVRYTIME SELECTED MOVIE CHANGED

  if(!mainTrailer){

    return(<div>loading video....

      <Thumbnail/>
    </div>)
  }



   

  return (
    <div className='relative' >
      {mainTrailer&&<VideoBackground trailer={mainTrailer}/>}
      <VideoTitle title={mainMovie.original_title} overview={mainMovie.overview}  />
    </div>
  )
}

export default MainContainer
