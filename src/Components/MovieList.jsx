import React from 'react'
import MovieCard from './MovieCard'
import { image_cdn_url } from '../utils/constant'

const MovieList = ({nowMovies,heading}) => {
    console.log("Movie List Rendered")
    console.log(nowMovies)
    
   
  return (
    <div className='py-2 pl-2 '>
    <div className='pb-1 text-white font-sans font-bold'>{heading}</div>
    <div className='flex overflow-x-scroll  gap-1 h-32'>{nowMovies.map((m,index)=>{
        const posterUrl=`${ image_cdn_url }${m.poster_path}`;
        
        return<MovieCard key={m.id} posterUrl={posterUrl}/>
        
        })}</div>
    </div>
  )
}

export default MovieList
