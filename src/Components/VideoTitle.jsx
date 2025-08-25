import React from 'react'
import useMoviesContext from '../utils/useMoviesContext'

const VideoTitle = ({title,overview}) => {
  const {trailer}=useMoviesContext()

  //console.log("video title rendered")

  const handleClick=()=>{

    window.open(`https://www.youtube.com/watch?v=${trailer.key}`, "_blank")

  }
  const handleClick2 = (movieName) => {
  const query = encodeURIComponent(`${movieName} site:en.wikipedia.org`);
  const url = `https://www.google.com/search?q=${query}`;
  window.open(url, '_blank');
};

 // console.log("title"+title)
 //absolute sm:top-20 left-4 bottom-12
  return (
    
    <div className='sm:pl-6 pl-2 pt-24 sm:pt-16 absolute top-0 text-white w-screen aspect-video bg-gradient-to-r from-black/90  to-transparent'>
<h1 className="text-2xl font-bold font-sans pb-2 sm:text-4xl sm:font-bold ">
  {title}
</h1>
     <p className='sm:w-1/4 sm:text-[0.7rem] text-left sm:block hidden font-sans '>{overview}</p>
    <div className='flex justify-start items-center w-60 sm:gap-1  gap-1 mt-1 py-1  '>
        <button className='px-2 w-24 bg-white text-black rounded active:scale-95 cursor-pointer hover:scale-105 hover:opacity-75 ' onClick={handleClick}>► play</button>
      <button className='px-2 w-24 bg-zinc-900  text-white rounded active:scale-95 cursor-pointer hover:scale-105 hover:bg-black' onClick={()=>handleClick2(title)}>more Info+</button>
      </div>
 
    </div>

   
  )
}

export default VideoTitle
