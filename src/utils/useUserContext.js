
import { createContext, useState ,useContext} from "react";


const UserContext=createContext();

export const UserContextProvider=({children})=>{
 

    const [user,setUser]=useState(null);

    const addUser=(u)=>{
        setUser(u);
        console.log(user);
    }

    const removeUser=()=>{
        setUser(null);
  
        
    }


    return (
        <UserContext.Provider value={{user,setUser,addUser,removeUser}}>{children}</UserContext.Provider>
    )
}

const useUserContext=()=>useContext(UserContext);
export default  useUserContext;