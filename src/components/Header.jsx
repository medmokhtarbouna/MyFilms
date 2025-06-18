// src/components/Header.jsx
import { NavLink, Link } from "react-router-dom";
import { FiHome, FiSearch, FiPlusCircle, FiFilm } from "react-icons/fi";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 md:left-64 right-0 h-20 bg-black/60 backdrop-blur-lg border-b border-gray-800 z-40">
      <div className="h-full flex flex-col md:flex-row items-center md:justify-between px-4 md:px-8 space-y-2 md:space-y-0">
        
        {/* Logo only on mobile, above the buttons */}
        <div className="flex items-center block sm:hidden mb-2">
          <FiFilm className="text-purple-500 text-2xl" />
          <Link to="/" className="ml-2 text-xl font-bold text-white">
            MyFilms
          </Link>
        </div>

        {/* Search box: hidden on mobile */}
        <Link
          to="/recherche"
          className="hidden sm:block max-w-md w-full px-4 md:px-8 relative"
        >
          <div className="flex items-center bg-gray-800 text-gray-400 rounded-full px-4 py-2 cursor-pointer hover:bg-gray-700 transition">
            <FiSearch className="mr-2" />
            <span>Search Your Videos</span>
          </div>
        </Link>

        {/* Action buttons */}
        <div className="flex items-center space-x-4">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `flex items-center px-3 py-1 rounded-full transition ${
                isActive
                  ? "bg-gradient-to-r from-purple-500 to-blue-400 text-white"
                  : "text-gray-200 hover:bg-gray-700 hover:text-white"
              }`
            }
          >
            <FiHome className="mr-1" /> Accueil
          </NavLink>
          <NavLink
            to="/recherche"
            className={({ isActive }) =>
              `flex items-center px-3 py-1 rounded-full transition ${
                isActive
                  ? "bg-gradient-to-r from-purple-500 to-blue-400 text-white"
                  : "text-gray-200 hover:bg-gray-700 hover:text-white"
              }`
            }
          >
            <FiSearch className="mr-1" /> Recherche
          </NavLink>
          <NavLink
            to="/ajouter"
            className={({ isActive }) =>
              `flex items-center px-3 py-1 rounded-full transition ${
                isActive
                  ? "bg-gradient-to-r from-purple-500 to-blue-400 text-white"
                  : "text-gray-200 hover:bg-gray-700 hover:text-white"
              }`
            }
          >
            <FiPlusCircle className="mr-1" /> Ajouter
          </NavLink>
        </div>
      </div>
    </header>
  );
}
