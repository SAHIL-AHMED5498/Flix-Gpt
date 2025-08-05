import { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import { image_cdn_url } from '../utils/constant'
import useMoviesContext from '../utils/useMoviesContext'

const MovieList = ({heading,type,p}) => {
  console.log("Movie List Rendered")
  const {getMoviesList,pageNumber}=useMoviesContext();


  const [list,setList]=useState(null);
 // console.log(list)
  
  const fetchMovie=async()=>{
    try{
     console.log("fetching"+type);
        const res=await getMoviesList(p,type);
         setList(res);
   


    }
    catch(err){
      console.log(err);
    }
  
  }

  useEffect(()=>{
    fetchMovie();
  },[pageNumber])


  if(!list){
    return(<div>Loading Lists...</div>)
  }
    
   
    
   
  return (
    <div className='py-2 pl-2 '>

    <div className='pb-1 text-white font-sans font-bold'>{heading}</div>

    {list&&<div className='flex overflow-x-scroll  gap-3 h-36 cursor-pointer'>{list.map((m)=>{
        const posterUrl=`${ image_cdn_url }${m.poster_path}`;
        
        return<MovieCard key={m.id} posterUrl={posterUrl} movieId={m.id}/>
        
        })}</div> }


    </div>
  )
}

export default MovieList
