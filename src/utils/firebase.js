import axios from 'axios'
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import useUserContext from "./useUserContext";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { BACKEND_URL } from './constant';

const firebaseConfig = {
  apiKey: "AIzaSyD_8rMibMOZHb1JIlbtXK-t_ZwStzI8urA",
  authDomain: "flix-gpt-f48c8.firebaseapp.com",
  projectId: "flix-gpt-f48c8",
  storageBucket: "flix-gpt-f48c8.firebasestorage.app",
  messagingSenderId: "1010430906409",
  appId: "1:1010430906409:web:62f55337d84111120bcc38",
  measurementId: "G-TDSESJHH27",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();


export const useFirebaseAuth = () => {//FIREBASE AUTH HOOK

  const {addUser,removeUser} = useUserContext();
  const navigate = useNavigate();
  const location=useLocation();



  const signUp = async (email, pass, name) => {
    try {

      if(!name){
        toast.error("Missing required details")
        throw new Error("missing required details");
        
      }


     const res = await axios.post(BACKEND_URL+"/auth/signUp",
      {
      email,name,pass
     },
     {withCredentials:true})

     addUser(res.data);
     navigate("/browse")

    


  

    }catch (error) {
      console.error("SignUp Error:", error.code, error.message);
      
     
    }
  };

const login = async (email, pass) => {
  try {
    const res=await axios.post(BACKEND_URL+"/auth/signIn",{email,pass},{withCredentials:true});
    addUser(res.data);
    navigate("/browse")
  } catch (error) {
    
    console.error("login error:", error.code, error.message);

  
    throw error;
  }
};

  const logout=async () => {
  try {
  
    const res=await axios.post(BACKEND_URL+"/auth/logout",{},{withCredentials:true});
    
    removeUser();
    navigate("/");
   toast.success(" Logged out successfully!");
  } catch (error) {
    console.error("Logout Error:", error.message);
     toast.error(" Error occurred. Please retry shortly.");
  }
};




 useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(BACKEND_URL + "/view/profile", {
          withCredentials: true,
        });

        if (res.data) {
          addUser(res.data);

          // if user is already logged in but visiting "/", send them to /browse
          if (location.pathname === "/") {
            navigate("/browse");
          }
        }
      } catch (err) {
        console.log("Auth check failed:", err.message);
        removeUser();

        // if user is logged out but trying to access protected pages, redirect to "/"
        if (location.pathname === "/browse" || location.pathname === "/search") {
          navigate("/");
        }
      }
    };

    fetchProfile();
  }, []);







  return { signUp, login,logout };
};






//ALWAYS USE HOOKS IN COMPONENT AND NOT INSIDE NORMAL FUNCTION