import useUserContext from "../utils/useUserContext"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useMoviesContext from "../utils/useMoviesContext";
import { useEffect,useState } from "react";


const Browse=()=>{

 const [Page,setPage]=useState(1);

const {nowMovies,getNowMovies}=useMoviesContext();

useEffect(()=>{
    getNowMovies(`${Page}`);

},[Page])
  
    const {user}=useUserContext();

      if (!user) {
    return <div className="relative top-14">Loading...</div>; // or redirect, or spinner


  }

    //const {displayName,email,userId}=user;
    //console.log(nowMovies);
 


    return(
      <div className="relative top-14">
        <MainContainer/>
        <SecondaryContainer/>
      </div>
    )

}

export default Browse