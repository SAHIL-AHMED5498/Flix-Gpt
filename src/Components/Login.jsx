import  { useEffect, useRef, useState } from "react";
import { validate } from "../utils/validate";
import { useFirebaseAuth } from "../utils/firebase";
import toast from "react-hot-toast";
import { auth } from "../utils/firebase";
import useUserContext from "../utils/useUserContext";





const Login = () => {
  const {user}=useUserContext();

  const { signUp, login } = useFirebaseAuth();  //GET AUTH FUNCTIONS
  const [sign, setSign] = useState(true); //MANAGE FORM 
  const [err, setErr] = useState(null); //DISPLAY FORM ERROR


  const email = useRef(null); 
  const pass = useRef(null);
  const name = useRef(null);



  const toggleSign = (e) => {
    e.preventDefault(); // Prevent form submission
    setSign(!sign);
  };  //TOGGLE SIGN IN, SIGN UP PAGE

  const handleClick = async (e) => {
    e.preventDefault();

  const emailVal = email.current?.value?.trim();
  const passVal = pass.current?.value?.trim();
  const nameVal = name.current?.value?.trim();

 
    
    const errMessage = validate(emailVal, passVal); //GIVE ERROR IF ANY OR NULL IF NO ERROR
    setErr(errMessage); 
    if(errMessage){
      return;
    }
    try{ 
       if (!sign) {
         //IF A SIGNUP REQUEST
       

        

  

        await toast.promise(signUp(emailVal, passVal, nameVal), //CREATE USER
          {
          loading: 'Creating account...',
          success: <b>Account created successfully!</b>,
          error: <b>Failed to create account.</b>,
        } )

       setTimeout(()=>{ toast.custom((t) => (
  <div
    className={`${
      t.visible ? 'animate-enter' : 'animate-leave'
    } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 z-10`}
  >
    <div className="flex-1 w-0 p-4">
      <div className="flex items-start gap-1">
        <img
          className="h-12 w-12 object-cover rounded-full flex-none"
          src="https://cdn.pfps.gg/pfps/5749-nice-anime-profile-icon.png"
          alt="Profile"
        />
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-900">
            Sahil (Developer)
          </p>
          <p className="mt-1 text-sm text-gray-500">
  Welcome aboard! 🎉 You’re now part of <span className="text-purple-600 font-semibold">version 1.0</span> — stable, smooth, and packed with potential 🚀
</p>
        </div>
      </div>
    </div>
    <div className="flex border-l border-gray-200">
      <button
        onClick={() => toast.dismiss(t.id)}
        className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Close
      </button>
    </div>
  </div>
))},500)  

         
      




      //console.log(user);
    }
     else
     {

        await toast.promise(
          login(emailVal, passVal),  //SIGNIN USER
          {
          loading: 'Signing in...',
          //success: <b>Welcome back!</b>,
          error: <b>Login failed. Check your credentials.</b>,
        })

     toast.custom((t) => (
  <div
    className={`${
      t.visible ? 'animate-enter' : 'animate-leave'
    } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 z-10`}
  >
    <div className="flex-1 w-0 p-4">
      <div className="flex items-start gap-1">
        <img
          className="h-12 w-12 object-cover rounded-full flex-none"
          src="https://cdn.pfps.gg/pfps/5749-nice-anime-profile-icon.png"
          alt="Profile"
        />
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-900">
            Sahil (Developer)
          </p>
          <p className="mt-1 text-sm text-gray-500">
  Welcome Back <span className="text-purple-600 font-semibold">{user?.name || "User"}</span>
</p>
        </div>
      </div>
    </div>
    <div className="flex border-l border-gray-200">
      <button
        onClick={() => toast.dismiss(t.id)}
        className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Close
      </button>
    </div>
  </div>
))

      
      //console.log(user);


    }}
    catch(err){
      console.log(err);
      //toast.error("unexpected error occured");
    }
  


  };

  return (
    <div className="relative h-screen w-screen top-12">
      <img
        // src="/images/imgOne.jpg"
        src="/bg-img.svg"
        alt="Background"
        className="w-full h-full object-cover"
      />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-80 p-8 rounded-lg shadow-lg w-[300px] text-white">
        <form onSubmit={(e) => e.preventDefault()}>
          <h1 className="text-2xl font-bold mb-4 text-center">
            {sign ? "Sign In" : "Sign Up"}
          </h1>

          {!sign && (
            <input
              ref={name}
              type="text"
              placeholder="Name"
              className="w-full mb-3 p-2 rounded bg-gray-800 placeholder-gray-400 outline-none"
            />
          )}

          <input
            ref={email}
            type="text"
            placeholder="Email"
            className="w-full mb-3 p-2 rounded bg-gray-800 placeholder-gray-400 outline-none"
          />
          <input
            ref={pass}
            type="password"
            placeholder="Password"
            className="w-full mb-4 p-2 rounded bg-gray-800 placeholder-gray-400 outline-none"
          />
          <p className="text-red-500 text-xl py-2 font-bold">{err}</p>

          <button
            className="w-full bg-green-600 hover:bg-green-700 transition p-2 rounded mb-4  active:scale-95"
            onClick={handleClick}
          >
            {sign ? "Sign In" : "Create Account"}
          </button>

          <p className="text-center text-sm ">
            {sign ? "Not a user?" : "Already have an account?"}{" "}
            <button
              onClick={toggleSign}
              className="text-green-400 hover:underline rounded-sm active:scale-95"
            >
              {sign ? "Sign Up" : "Sign In"}
            </button>
            {!sign && <button className="bg-blue-500 p-2 m-2 font-bold rounded hover:bg-blue-600 active:scale-95 active:font-extrabold">Sign in with Google</button>}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
