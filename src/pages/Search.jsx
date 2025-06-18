// src/pages/Search.jsx
import { useState } from 'react';
import { searchMovies } from '../api/tmdb';
import MovieCard from '../components/MovieCard';

export default function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!query) return;

    searchMovies(query)
      .then(({ data }) => {
        const apiRes = data.results.map(m => ({ ...m, source: 'api', id: m.id }));
        const customRaw = JSON.parse(localStorage.getItem('customMovies')||'[]');
        const customRes = customRaw
          .map((m,i)=>({ ...m, source:'custom', idIndex:i }))
          .filter(m=>m.title.toLowerCase().includes(query.toLowerCase()));
        setResults([...customRes, ...apiRes]);
      })
      .catch(console.error);
  };

  return (
    <div className="mt-8">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent mb-6 text-center">Résultats de recherche</h1>
      <form onSubmit={handleSubmit} className="mb-8 flex items-center space-x-4 px-20">
        <input
          type="text"
          placeholder="Rechercher un film..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 bg-gray-800 text-gray-200 placeholder-gray-500 rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
        />
        <button type="submit" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-3 rounded-full transition">
          Rechercher
        </button>
      </form>
      {results.length>0 ? <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">{results.map(m=><MovieCard key={m.source==='custom'?`custom-${m.idIndex}`:m.id} movie={m}/>)} </div> : query && <p className="text-gray-400 text-center">Aucun résultat pour « {query} »</p> }
    </div>
  );
}