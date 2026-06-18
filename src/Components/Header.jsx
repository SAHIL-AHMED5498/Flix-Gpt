import { useEffect, useState } from "react";
import { useFirebaseAuth } from "../utils/firebase";
import useUserContext from "../utils/useUserContext";
import SelectLang from "./SelectLang";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const { user } = useUserContext();
  const { logout } = useFirebaseAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  const isBrowse = location.pathname === "/browse";

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSearchClick = () => {
    navigate("/search");
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
          isBrowse
            ? isScrolled
              ? "bg-black/90 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              : "bg-gradient-to-b from-black/80 via-black/40 to-transparent"
            : "bg-black/95 backdrop-blur-md border-b border-white/10"
        }`}
      >
        <div className="mx-auto flex h-16 sm:h-20 w-full max-w-[1800px] items-center justify-between px-4 sm:px-8">
          <div
            onClick={() => (user ? navigate("/browse") : navigate("/"))}
            className="cursor-pointer"
          >
            <img
              className="h-8 sm:h-10 w-auto object-contain"
              src="/images/flix-logo.jpg"
              alt="Flix Logo"
            />
          </div>

          <div className="hidden md:flex items-center gap-8">
            {user && (
              <button
                onClick={() => navigate("/browse")}
                className="text-sm font-medium tracking-wide text-[#e5e5e5] hover:text-white transition-colors duration-200"
              >
                Home
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {user && (
              <button
                onClick={handleSearchClick}
                className="rounded-md bg-white/10 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-white hover:bg-white/20 transition-colors duration-200"
              >
                Search
              </button>
            )}

            {false && (
              <div>
                <SelectLang />
              </div>
            )}

            {user && (
              <button
                className="rounded-md bg-[#e50914] px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-white hover:bg-[#f6121d] transition-colors duration-200"
                onClick={logout}
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </header>

      {!isBrowse && <div className="h-16 sm:h-20"></div>}
    </>
  );
};

export default Header;
