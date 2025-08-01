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
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
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

  const signUp = async (email, pass, name) => {
    try {

     const u = await createUserWithEmailAndPassword(auth, email, pass);
     await updateProfile(u.user, {
      displayName: name,
      });
      alert("Account created successfully");
      navigate("/browse");   //USEEFFECT WILL FILL LOCAL USER VALUE WITH USER VALUE OF AUTH

    }catch (error) {
      console.error("SignUp Error:", error.code, error.message);
    }
  };

  const login = async (email, pass) => {

    await signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
       
        // Signed in
      //  addUser(
      // {displayName:u.user.displayName,
      //   email:u.user.email,
      //   userId:u.user.uid});

        alert("login success");
        navigate("/browse");

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + " " + errorMessage);
        alert("something went wrong try again!");
      });
  };

  const logout=async () => {
  try {
   // navigate("/");
    await signOut(auth);
    alert("Logged out successfully");
  } catch (error) {
    console.error("Logout Error:", error.message);
  }
};

   useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
    // User is signed in
    console.log("User is signed in:", user.uid);

    addUser(
      {displayName:user.displayName,
        email:user.email,
        userId:user.uid});
    
  } else {
    // User is signed out
    console.log("User is signed out.");
    navigate("/")
    removeUser(null);
  
  }
});

return unsubscribe;
 },[])



  return { signUp, login,logout };
};






//ALWAYS USE HOOKS IN COMPONENT AND NOT INSIDE NORMAL FUNCTION