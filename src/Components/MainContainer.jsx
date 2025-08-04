import React, { useEffect } from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import useMoviesContext from '../utils/useMoviesContext'

const MainContainer = ({mainMovie}) => {
  console.log("maincontainer rendered")



  const {getMovieVideo,trailer}=useMoviesContext();

   useEffect(()=>{
    
     getMovieVideo(mainMovie.id);

  },[mainMovie])

  if(!trailer){

    return(<div>loading video....</div>)
  }



   

  return (
    <div className='relative' >
      <VideoBackground trailer={trailer}/>
      <VideoTitle title={mainMovie.original_title} overview={mainMovie.overview}  />
    </div>
  )
}

export default MainContainer
