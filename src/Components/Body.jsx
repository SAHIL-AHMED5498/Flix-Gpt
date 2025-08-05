import { useEffect, useState } from "react";
import useMoviesContext from "../utils/useMoviesContext"



const Body=()=>{
    const {getMoviesList}=useMoviesContext();
    const [list,setList]=useState(null);
    console.log(list);

   const handleClick=async(p,type)=>{
        console.log(type,p);
       const list= await getMoviesList(type,p);
       setList(list);

       
       

    }



    

    return(<div className="bg-slate-100 relative top-14">

    {/* {nowMovies&&<h1 >Body  componeny {nowMovies.results.map((m,index)=><li key={index}>{index} {m.original_title}</li>)}</h1>}
    <div className="flex justify-center items-center gap-1"> <button onClick={()=>setPage(Page-1)}>⬅️</button>
    <p>{Page}</p>
    <button  onClick={()=>setPage(Page+1)}>➡️</button></div>
    */}

    <button onClick={()=>handleClick("now_playing",1)} className="bg-purple-400 p-2 m-2 hover:bg-purple-500 active:scale-90">fetch now movies</button>
    
    <button onClick={()=>handleClick("popular",1)} className="bg-purple-400 p-2 m-2 hover:bg-purple-500 active:scale-90">fetch popular</button>

    
    <button onClick={()=>handleClick("top_rated",1)} className="bg-purple-400 p-2 m-2 hover:bg-purple-500 active:scale-90">fetch top rated</button>
    
    <button onClick={()=>handleClick("upcoming",1)} className="bg-purple-400 p-2 m-2 hover:bg-purple-500 active:scale-90">upcoming</button>

    </div>
    )
}

export default Body