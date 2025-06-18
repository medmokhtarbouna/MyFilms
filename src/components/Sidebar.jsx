// src/components/Sidebar.jsx
import { NavLink } from 'react-router-dom';
import { FiHome, FiSearch, FiPlusCircle, FiFilm } from 'react-icons/fi';

export default function Sidebar() {
  const linkBase = 'flex items-center px-6 py-3 mb-1 rounded-lg transition-colors';
  const active = 'text-white bg-gradient-to-r from-purple-500 to-blue-400';
  const inactive = 'text-gray-400 hover:text-white hover:bg-gray-800';

  return (
    <aside className="hidden md:block fixed top-0 left-0 h-full w-64 bg-black text-gray-400 px-3">
      {/* Logo */}
      <div className="flex items-center px-6 py-5">
        <FiFilm size={28} className="text-purple-500" />
        <span className="ml-2 text-2xl font-bold text-white">MyFilms</span>
      </div>

      {/* Navigation */}
      <nav className="mt-6">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `${linkBase} ${isActive ? active : inactive}`
          }
        >
          <FiHome className="text-xl" />
          <span className="ml-3">Home</span>
        </NavLink>

        <NavLink
          to="/recherche"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? active : inactive}`
          }
        >
          <FiSearch className="text-xl" />
          <span className="ml-3">Search</span>
        </NavLink>

        <NavLink
          to="/ajouter"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? active : inactive}`
          }
        >
          <FiPlusCircle className="text-xl" />
          <span className="ml-3">Add Movie</span>
        </NavLink>
      </nav>
    </aside>
);
}
