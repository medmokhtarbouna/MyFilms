// // src/components/Navbar.jsx
// import { Link } from 'react-router-dom';
// import { FiFilm } from 'react-icons/fi';

// export default function Navbar() {
//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/20 border-b border-white/30 shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
          
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-2">
//             <FiFilm size={28} className="text-blue-400" />
//             <span className="text-white font-bold text-xl">MyFilms</span>
//           </Link>
          
//           {/* الروابط والأزرار */}
//           <div className="flex space-x-4">
//             <Link
//               to="/"
//               className="text-white hover:bg-white/30 px-3 py-2 rounded-md transition"
//             >
//               Accueil
//             </Link>
//             <Link
//               to="/recherche"
//               className="text-white hover:bg-white/30 px-3 py-2 rounded-md transition"
//             >
//               Recherche
//             </Link>
//             <Link
//               to="/ajouter"
//               className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-2 rounded-md transition"
//             >
//               Ajouter un film
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }
