
import useMoviesContext from '../utils/useMoviesContext'
import MovieList from './MovieList'

const SecondaryContainer = () => {
  const {nowMovies}=useMoviesContext();

  if(!nowMovies){
    return(<div>Loading Movie Lists....</div>)
  }

  return (
    <div className='absolute sm:top-96 top-44 bg-black'>
      <MovieList heading={"Now Playing Movies"} nowMovies={nowMovies}/>
      <MovieList heading={"Trending"} nowMovies={nowMovies}/>
      <MovieList heading={"Popular"} nowMovies={nowMovies}/>
      <MovieList heading={"Horror"} nowMovies={nowMovies}/>
      
    </div>
  )
}

export default SecondaryContainer
