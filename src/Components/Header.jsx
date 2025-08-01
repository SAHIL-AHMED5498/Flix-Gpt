import { useFirebaseAuth } from "../utils/firebase";
import useUserContext from "../utils/useUserContext"

const Header=()=>{

    const {user}=useUserContext();
   const {logout}=useFirebaseAuth();


return(
    <div className=" bg-zinc-900 w-full fixed z-10 flex justify-between items-center">
       <img className="ml-2 h-12 " src="/images/flix-logo.jpg" alt="Flix Logo" />  

    {user &&<button className="bg-red-400 p-2 m-2 rounded-sm active:scale-95" onClick={logout}>Logout</button>} 
    </div>
)

}

export default Header