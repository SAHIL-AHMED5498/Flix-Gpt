import React, { useEffect } from 'react'
import SecondaryContainer from "./SecondaryContainer"
import useMoviesContext from '../utils/useMoviesContext';
import useUserContext from "../utils/useUserContext"
import MainContainer from './MainContainer';

const Browse = () => {
  console.log("browse page rendered");

 const {user}=useUserContext();
  const {nowMovies,getNowMovies,randomNumber}=useMoviesContext();

   let mainMovie="";

  useEffect(()=>{

    console.log("fetching now movies");
    getNowMovies("1");


  },[])


if(nowMovies!==null){
  mainMovie=nowMovies[randomNumber.current]
  }

if(!user || nowMovies==null){
  return(<div className='relative top-14'>loading...</div>)
}

  return (
    <div className='top-0 relative'>
      
    <MainContainer mainMovie={mainMovie}/>
    <SecondaryContainer/>
    </div>
  )
}

export default Browse
