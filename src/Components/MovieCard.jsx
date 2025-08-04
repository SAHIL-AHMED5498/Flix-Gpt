import React from 'react'

const MovieCard = ({posterUrl}) => {
    console.log(posterUrl);
  return (
    < >
      <img src={posterUrl} alt="poster"/>
    </>
  )
}

export default MovieCard
