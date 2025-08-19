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

  const {addUser,removeUser } = useUserContext();
  const navigate = useNavigate();
  const location=useLocation();

  const signUp = async (email, pass, name) => {
    try {
      if(!name){
        toast.error("Missing required details")
        throw new Error("missing required details");
        
      }


     const u = await createUserWithEmailAndPassword(auth, email, pass); //user created 

     await updateProfile(u.user, {
      displayName: name,
      }); //name updated

      await u.user.reload();
       addUser(
      {displayName:auth.currentUser.displayName,
        email:auth.currentUser.email,
        userId:auth.currentUser.uid}); //fill updated name to local user variable


  

    }catch (error) {
      console.error("SignUp Error:", error.code, error.message);
      throw error
     
    }
  };

const login = async (email, pass) => {
  try {
    await signInWithEmailAndPassword(auth, email, pass);
  } catch (error) {
    
    console.error("Firebase login error:", error.code, error.message);

  
    throw error;
  }
};

  const logout=async () => {
  try {
   navigate("/");
    await signOut(auth);
   toast.success(" Logged out successfully!");
  } catch (error) {
    console.error("Logout Error:", error.message);
     toast.error(" Error occurred. Please retry shortly.");
  }
};

   useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
    // User is signed in
    if(location.pathname==="/"||location.pathname==="/browse"){
     navigate("/browse")
    }
    console.log("(FROM USEEFECT )User is signed in:", user.uid);
    console.log("(FROM USEEFFECT)current user"+JSON.stringify(user))
   

    addUser(
      {displayName:user.displayName,
        email:user.email,
        userId:user.uid});
    
  } 
  else {
    // User is signed out
    console.log("(FROM USEEFFECT)User is signed out.");
    if(location.pathname==="/browser" || location.pathname==="/"||location.pathname==="/search"){
    navigate("/")
    }
    removeUser(null);
  
  }
});

return unsubscribe;
 },[])



  return { signUp, login,logout };
};






//ALWAYS USE HOOKS IN COMPONENT AND NOT INSIDE NORMAL FUNCTION