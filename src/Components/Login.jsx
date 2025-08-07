import  { useRef, useState } from "react";
import { validate } from "../utils/validate";
import { useFirebaseAuth } from "../utils/firebase";



const Login = () => {

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
    
    const errMessage = validate(email.current.value, pass.current.value); //GIVE ERROR IF ANY OR NULL IF NO ERROR
    setErr(errMessage); 

    if (!sign) { //IF A SIGNUP REQUEST
      await signUp(email.current.value, pass.current.value, name.current.value); //CREATE USER
      //console.log(user);
    } else {
      await login(email.current.value, pass.current.value); //SIGNIN USER
      //console.log(user);
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
