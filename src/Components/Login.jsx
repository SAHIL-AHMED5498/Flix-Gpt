import React, { useState } from 'react';

const Login = () => {
  const [sign, setSign] = useState(true);

  const toggleSign = (e) => {
    e.preventDefault(); // Prevent form submission
    setSign(!sign);
  };

  return (
    <div className="relative h-screen w-screen">
      <img
        src="/images/netflix-bg.jpg"
        alt="Background"
        className="w-full h-full object-cover"
      />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-90 p-8 rounded-lg shadow-lg w-[300px] text-white">
        <form>
          <h1 className="text-2xl font-bold mb-4 text-center">
            {sign ? 'Sign In' : 'Sign Up'}
          </h1>
          
          {!sign &&   <input
            type="text"
            placeholder="Name"
            className="w-full mb-3 p-2 rounded bg-gray-800 placeholder-gray-400 outline-none"
          />}

          <input
            type="text"
            placeholder="Email"
            className="w-full mb-3 p-2 rounded bg-gray-800 placeholder-gray-400 outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 p-2 rounded bg-gray-800 placeholder-gray-400 outline-none"
          />

          <button className="w-full bg-red-600 hover:bg-red-700 transition p-2 rounded mb-4">
            {sign ? 'Sign In' : 'Create Account'}
          </button>

          <p className="text-center text-sm">
            {sign ? "Not a user?" : "Already have an account?"}{' '}
            <button
              onClick={toggleSign}
              className="text-red-400 hover:underline"
            >
              {sign ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
