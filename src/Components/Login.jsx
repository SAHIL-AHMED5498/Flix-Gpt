import  {useRef, useState } from "react";
import { validate } from "../utils/validate";
import { useFirebaseAuth } from "../utils/firebase";
import toast from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react"; 

import useUserContext from "../utils/useUserContext";





const Login = () => {
  const {user}=useUserContext();

  const { signUp, login } = useFirebaseAuth();  //GET AUTH FUNCTIONS
  const [sign, setSign] = useState(true); //MANAGE FORM 
  const [err, setErr] = useState(null); //DISPLAY FORM ERROR
  const [showPass,setShowPass]=useState(false);


  const email = useRef(null); 
  const pass = useRef(null);
  const name = useRef(null);

  const handleGuestLogin=async()=>{    
        await toast.promise(
          login("test5@gmail.com", "Test5@123"),  //SIGNIN USER
          {
          loading: 'Signing in...',
          success: <b>Welcome back!</b>,
          error: <b>Login failed. Check your credentials.</b>,
        })

  }

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
))},500)}

     else
     {

        const userData=await toast.promise(
          login(emailVal, passVal),  //SIGNIN USER
          {
          loading: 'Signing in...',
          //success: <b>Welcome back!</b>,
          error: <b>Login failed. Check your credentials.</b>,
        })

        if(!userData){
          throw new Error("login failed")
        }

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
  Welcome Back <span className="text-purple-600 font-semibold">{userData?.name || "User"}</span>
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

      


    }}



    catch(err){
      console.log(err);
    }
  


  };

  return (
    <div className="relative h-screen w-screen top-0 overflow-hidden">
      <img
        src="/bg-img.svg"
        alt="Background"
        className="w-full h-full object-cover"
      />

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-purple-900/20 to-black/40"></div>

      {/* Glass card with modern design */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 backdrop-blur-2xl bg-white/5 border border-white/10 p-10 rounded-2xl shadow-2xl w-[380px] text-white animate-[fadeInUp_0.6s_ease-out]">
        
        {/* Decorative glow effect */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <form onSubmit={(e) => e.preventDefault()} className="relative z-10">
          <h1 className="text-4xl font-bold mb-2 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {sign ? "Welcome Back" : "Join Us"}
          </h1>
          <p className="text-center text-gray-300 text-sm mb-6">
            {sign ? "Sign in to your account" : "Create a new account"}
          </p>

          {!sign && (
            <div className="mb-4 animate-[slideInRight_0.5s_ease-out]">
              <input
                ref={name}
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-gray-400 outline-none text-white focus:border-purple-500 focus:bg-white/20 focus:shadow-lg focus:shadow-purple-500/20 transition-all duration-300"
              />
            </div>
          )}

          <div className="mb-4 animate-[slideInRight_0.6s_ease-out]">
            <input
              ref={email}
              type="text"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-gray-400 outline-none text-white focus:border-purple-500 focus:bg-white/20 focus:shadow-lg focus:shadow-purple-500/20 transition-all duration-300"
            />
          </div>

          <div className="mb-4 animate-[slideInRight_0.7s_ease-out]">
            <div className="relative w-full">
              <input
                ref={pass}
                type={showPass ? "text" : "password"}
                placeholder="Password"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-gray-400 outline-none text-white focus:border-purple-500 focus:bg-white/20 focus:shadow-lg focus:shadow-purple-500/20 transition-all duration-300 pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-purple-400 transition-colors duration-300"
              >
                {showPass ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {err && (
            <p className="text-red-400 text-sm font-semibold mb-4 animate-[slideDown_0.3s_ease-out] bg-red-500/10 px-4 py-2 rounded-lg border border-red-500/30">
              {err}
            </p>
          )}

          <button
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 rounded-lg mb-3 active:scale-95 transition-all duration-300 transform hover:shadow-lg hover:shadow-purple-500/50 animate-[scaleIn_0.8s_ease-out]"
            onClick={handleClick}
          >
            {sign ? "Sign In" : "Create Account"}
          </button>

          <button
            onClick={handleGuestLogin}
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-3 rounded-lg mb-4 active:scale-95 transition-all duration-300 transform hover:shadow-lg hover:shadow-blue-500/50"
          >
            Guest Login
          </button>

          <p className="text-center text-sm text-gray-300">
            {sign ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              onClick={toggleSign}
              className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-bold hover:opacity-80 transition-opacity duration-300"
            >
              {sign ? "Sign Up" : "Sign In"}
            </button>
          </p>

          {!sign && (
            <button className="w-full mt-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white py-3 rounded-lg font-bold transition-all duration-300 transform hover:shadow-lg">
              Sign up with Google
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
