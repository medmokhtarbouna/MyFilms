// src/components/Header.jsx
import { NavLink, Link } from "react-router-dom";
import {
  FiHome,
  FiSearch,
  FiUpload,
  FiPlusCircle,
  FiBell,
  FiFilm,
} from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

export default function Header() {
  return (
    <header className="fixed top-0 left-64 right-0 h-20 bg-black/60 backdrop-blur-lg border-b border-gray-800 z-40">
      <div className="h-full flex items-center justify-between px-8">
        {/* Navigation Links */}
        {/* Logo */}
        <div className="flex items-center px-6 py-5 lg:hidden ">
          <FiFilm size={28} className="text-purple-500" />
          <span className="ml-2 text-2xl font-bold text-white">MyFilms</span>
        </div>
        {/* Search box navigates to /recherche */}
        <Link to="/recherche" className=" max-w-md w-full px-8 relative ">
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
              `lg:flex hidden items-center px-3 py-1 rounded-full transition ${
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
              `lg:flex hidden items-center px-3 py-1 rounded-full transition ${
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
              `lg:flex hidden items-center px-3 py-1 rounded-full transition ${
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
