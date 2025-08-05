
import { useState } from 'react'
import useMoviesContext from '../utils/useMoviesContext'
import MovieList from './MovieList'

const SecondaryContainer = () => {
  const {pageNumber}=useMoviesContext();


  


  if(!true){
    return(<div>Loading Movie Lists....</div>)
  }
  //

  return (
    <>
    <div className='absolute sm:top-96 top-44 sm:pl-6 pl-0 flex flex-col  '>
      <MovieList heading={"Now Playing Movies"}  type={"now_playing"} p={pageNumber}/>
      <MovieList heading={"Trending"}  type={"top_rated"} p={pageNumber} />
      <MovieList heading={"Popular"} type={"popular"} p={pageNumber}/>
      <MovieList heading={"Upcoming"} type={"upcoming"} p={pageNumber}/>
     
       
      
    </div>
   
    </>
  )
}

export default SecondaryContainer
