import React from 'react'
import useMoviesContext from '../utils/useMoviesContext';

const MovieCard = ({posterUrl,movieId}) => {
    const {getMovieVideo}=useMoviesContext()
    const handleClick = async () => {
  

  const video = await getMovieVideo(movieId);

  if (video?.key) {
    window.open(`https://www.youtube.com/watch?v=${video.key}`, "_blank");
  } else {
    console.warn("No trailer key found.");
  }
};
   
  return (
    <>
      <img src={posterUrl} alt="poster" className='rounded hover:scale-110' onClick={handleClick}/>
    </>
  )
}

export default MovieCard
