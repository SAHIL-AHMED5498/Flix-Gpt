import React, { useEffect, useState } from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import useMoviesContext from '../utils/useMoviesContext'

const MainContainer = ({mainMovie}) => {
  console.log("maincontainer rendered")



  const {getMovieVideo}=useMoviesContext();
  const [mainTrailer,setMainTrailer]=useState(null);

   useEffect(()=>{

      const fetchMovie=async()=>{
    
     const res= await getMovieVideo(mainMovie.id);
     setMainTrailer(res);
      

  }
  fetchMovie();
   }
    
  ,[mainMovie.id])

  if(!mainTrailer){

    return(<div>loading video....</div>)
  }



   

  return (
    <div className='relative' >
      {mainTrailer&&<VideoBackground trailer={mainTrailer}/>}
      <VideoTitle title={mainMovie.original_title} overview={mainMovie.overview}  />
    </div>
  )
}

export default MainContainer
