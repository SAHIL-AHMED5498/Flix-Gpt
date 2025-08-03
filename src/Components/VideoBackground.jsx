import React, { useEffect, useState } from 'react'
import { options } from '../utils/constant'



const VideoBackground = ({mainMovie}) => {
    
    const movieId=mainMovie.id;

    const [trailerId,setTrailerId]=useState("");

      const getMovieVideo=async(id)=>{

        try{   const data =await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
     const json=await data.json();
     //console.log(json); //list of movie videos
     const filteredData=json.results.filter((v)=>v.type=="Trailer");
     const trailer=(filteredData.length)?filteredData[0]:json.results[0];
     console.log(trailer.key);
     setTrailerId(trailer.key);
    
    }
     catch(err){
        console.log("video fetching error"+err);
     }
    





     
    
}


   useEffect(()=>{
        
       getMovieVideo(1100988);
      

       


    },[movieId])

       
   // width="560" height="315"



  return (
    <div className='bg-green-100 h-60 relative '>
      
      <iframe  
        src={`https://www.youtube.com/embed/${trailerId}?si=hZ6iNGOkMapbmBPV`}
        title="YouTube video player" 
        
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin"
         allowFullScreen></iframe></div>
    
  )
}

export default VideoBackground
