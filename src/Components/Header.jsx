import { useFirebaseAuth } from "../utils/firebase";
import useUserContext from "../utils/useUserContext"
import SelectLang from "./SelectLang";
import { supportedLang } from "../utils/languageConstants";
import { useNavigate } from "react-router-dom";
const Header=()=>{

    const {user}=useUserContext();
   const {logout}=useFirebaseAuth();
   const navigate=useNavigate();

   const handleSearchClick=()=>{
      navigate("/search");
   }

return(
    <>
      <div className="bg-gradient-to-b from-black/90 via-black/70 to-transparent backdrop-blur-xl w-full fixed z-10 px-6 py-4 border-b border-white/5 shadow-2xl shadow-purple-500/10">
        {/* Main navbar content */}
        <div className="flex justify-between items-center">
          
          {/* Logo Section */}
          <div 
            onClick={()=>(user)?navigate("/browse"):navigate("/")} 
            className="cursor-pointer transform hover:scale-105 transition-transform duration-300 group"
          >
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img className="h-12 drop-shadow-lg relative z-10" src="/images/flix-logo.jpg" alt="Flix Logo" />
            </div>
          </div>
          
          {/* Center Navigation Items */}
          <div className="hidden md:flex items-center gap-8">
            {user && (
              <button 
                onClick={() => navigate("/browse")}
                className="text-gray-300 hover:text-white font-semibold transition-colors duration-300 relative group"
              >
                Browse
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </button>
            )}
          </div>

          {/* Right Section */}
          <div className="flex justify-center items-center gap-3">
            {(user)&& (
              <button 
                onClick={handleSearchClick} 
                className="px-5 py-2.5 bg-white/10 hover:bg-white/15 backdrop-blur-md text-white border border-purple-500/40 hover:border-purple-400 rounded-lg active:scale-95 transition-all duration-300 transform hover:shadow-lg hover:shadow-purple-500/40 font-medium text-sm"
              >
                <span className="font-sans font-bold text-purple-400 mr-2">⚡</span>
                <span className="hidden sm:inline">Search</span>
              </button>
            )}
            
            {(false)&&<div><SelectLang/></div>}

            {user && (
              <button 
                className="bg-gradient-to-r from-red-500/80 to-pink-500/80 hover:from-red-600 hover:to-pink-600 text-white px-5 py-2.5 rounded-lg active:scale-95 transition-all duration-300 transform hover:shadow-lg hover:shadow-red-500/40 font-semibold text-sm border border-red-400/30" 
                onClick={logout}
              >
                Logout
              </button>
            )} 
          </div>
        </div>

        {/* Animated bottom border */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
      </div>

      {/* Spacer for fixed navbar */}
      <div className="h-20"></div>
    </>
)

}

export default Header