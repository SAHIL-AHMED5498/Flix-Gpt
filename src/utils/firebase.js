import axios from "axios";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import useUserContext from "./useUserContext";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,signOut
} from "firebase/auth";


import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { BACKEND_URL } from "./constant";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
// const analytics = getAnalytics(app);
export const auth = getAuth();


export const useFirebaseAuth = () => {       //FIREBASE AUTH HOOK

  const {addUser,removeUser,user } = useUserContext();
  const navigate = useNavigate();
  const location=useLocation();

  const signUp = async (email, pass, name) => {
    try {
      if(!name){
        toast.error("Missing required details")
        throw new Error("missing required details");
        
      }


     const res=await axios.post(BACKEND_URL+"/auth/signUp",
      {
      name,email,pass
     },
     {withCredentials:true,
       headers: {
          "Content-Type": "application/json",
        },
      })
      console.log(res.data);

      addUser(res.data);
      
   navigate("/browse")

    

  
  

    }catch (error) {
      console.error("SignUp Error:", error.code, error.message);
      
     
    }
  };

const login = async (email, pass) => {
  try {
   const res=await axios.post(BACKEND_URL+"/auth/signIn",{email,pass},{withCredentials:true})
   console.log(res);
   addUser(res.data);
   navigate("/browse")
  } 
  
  catch (error) {
    
    console.error(" login error:", error.code, error.message);

  
    throw error;
  }
};

  const logout=async () => {
  try {
   navigate("/");
   const res=await axios.post(BACKEND_URL+"/auth/logout",{},{withCredentials:true});
   console.log(res);
   toast.success(" Logged out successfully!");
  } catch (error) {
    console.error("Logout Error:", error.message);
     toast.error(" Error occurred. Please retry shortly.");
  }
};





  return { signUp, login,logout };
};






//ALWAYS USE HOOKS IN COMPONENT AND NOT INSIDE NORMAL FUNCTION