import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import useMoviesContext from '../utils/useMoviesContext'

const MainContainer = () => {

    const {nowMovies}=useMoviesContext();
    if(!nowMovies){
        return(<div className='relative top-14'>Loading</div>)
    }
    console.log(nowMovies)

    const mainMovie=nowMovies[0];


  return (
    <div >
      <VideoBackground mainMovie={mainMovie}/>

      <VideoTitle title={mainMovie.original_title} overview={mainMovie.overview}  />
    </div>
  )
}

export default MainContainer
