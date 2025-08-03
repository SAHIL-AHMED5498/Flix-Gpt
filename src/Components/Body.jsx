import { useEffect, useRef, useState } from "react";



const Body=()=>{
    const [datas,setDatas]=useState({data:"loading"});
    let Json=""
    const search=useRef();

    const handleClick=()=>{
        fetchData(search.current.value)

    }
  
    const fetchData=async(s)=>{
    const data=await fetch(`http://www.omdbapi.com/?t=${s}&y=2020&plot=full&apikey=dc67d842`);
     Json=await data.json();
     setDatas(Json);

     
    }
 

    


    return(<div className="bg-slate-100 relative top-14">

    <h1 >Body  componeny</h1>
    
    <input type="text" placeholder="search" ref={search} className="bg-slate-200 p-2 m-2 rounded border "/>
    
    <button onClick={handleClick} className="text-black bg-blue-200 p-2 m-2 active:scale-95 hover:bg-blue-500">Search</button>
    {datas && <p>fetched data :{JSON.stringify(datas, null, 2)}</p>}
    </div>)
}

export default Body