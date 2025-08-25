import { useFirebaseAuth } from "../utils/firebase";
import useUserContext from "../utils/useUserContext"
import SelectLang from "./SelectLang";
import { supportedLang } from "../utils/languageConstants";
import { useNavigate } from "react-router-dom";
const Header=()=>{

    const {user}=useUserContext();
   const {logout}=useFirebaseAuth();
   const navigate=useNavigate();

   const handleSearchClick=()=>{
      navigate("/search");

   }


return(
    <div className=" bg-black w-full fixed z-10 flex justify-between items-center">
      <div onClick={()=>(user)?navigate("/browse"):navigate("/")}> <img className="ml-2 h-12 " src="/images/flix-logo.jpg" alt="Flix Logo" />  </div>
      
       <div className="flex justify-center items-center">
         {(user)&& <button onClick={handleSearchClick} className="m-2 p-2 bg-black text-white border border-purple-500 active:scale-95 cursor-pointer" ><span className="font-sans font-bold text-purple-400 mr-1">Ai</span>Search</button>}
         {(false)&&<div><SelectLang/></div>}

    {user &&<button className="bg-red-400 p-2 m-2 rounded-sm active:scale-95" onClick={logout}>Logout</button>} 
    
       </div>
      </div>
)

}

export default Header