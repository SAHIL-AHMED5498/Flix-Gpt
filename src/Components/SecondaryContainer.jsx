import { useState } from 'react'
import useMoviesContext from '../utils/useMoviesContext'
import MovieList from './MovieList'

const SecondaryContainer = () => {
  const { pageNumber } = useMoviesContext()

  const newPageNumber = pageNumber + 2

  if (!true) {
    return <div>Loading Movie Lists....</div>
  }

  return (
    <>
      <div className='absolute sm:top-96 top-44 sm:pl-8 pl-0 flex flex-col w-full bg-gradient-to-b from-transparent via-black/40 to-black/80 pt-8'>
        <MovieList heading={"Now Playing Movies"} type={"now_playing"} p={pageNumber} />
        <MovieList heading={"Trending"} type={"top_rated"} p={pageNumber} />
        <MovieList heading={"Popular"} type={"popular"} p={pageNumber} />
        <MovieList heading={"Upcoming"} type={"upcoming"} p={pageNumber} />

        <MovieList heading={"Now Playing Movies"} type={"now_playing"} p={newPageNumber} />
        <MovieList heading={"Trending"} type={"top_rated"} p={newPageNumber} />
        <MovieList heading={"Popular"} type={"popular"} p={newPageNumber} />
        <MovieList heading={"Upcoming"} type={"upcoming"} p={newPageNumber} />
      </div>
    </>
  )
}

export default SecondaryContainer