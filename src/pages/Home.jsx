// src/pages/Home.jsx
import { useEffect, useState } from 'react';
import { fetchPopular } from '../api/tmdb';
import MovieCard from '../components/MovieCard';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchPopular(page)
      .then(({ data }) => {
        const apiMovies = data.results.map(m => ({ ...m, source: 'api', id: m.id }));
        const customRaw = JSON.parse(localStorage.getItem('customMovies') || '[]');
        const customMovies = customRaw.map((m, i) => ({
          ...m,
          source: 'custom',
          idIndex: i
        }));
        setMovies([...customMovies, ...apiMovies]);
        setTotalPages(data.total_pages);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [page]);

  const handlePrev = () => setPage(p => Math.max(p - 1, 1));
  const handleNext = () => setPage(p => Math.min(p + 1, totalPages));

  return (
    <div>
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent my-6 text-center">
        Films populaires
      </h1>

      {loading ? (
        <div className="text-gray-400 text-center">Chargement...</div>
      ) : (
        <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {movies.map(m => (
            <MovieCard
              key={m.source === 'custom' ? `custom-${m.idIndex}` : m.id}
              movie={m}
            />
          ))}
        </div>
      )}

      <div className="flex items-center justify-center mt-6 space-x-4">
        <button
          onClick={handlePrev}
          disabled={page === 1}
          className="bg-gray-700 text-white px-4 py-2 rounded disabled:opacity-50 transition"
        >
          Précédent
        </button>
        <span className="text-gray-200">Page {page} de {totalPages}</span>
        <button
          onClick={handleNext}
          disabled={page === totalPages}
          className="bg-gray-700 text-white px-4 py-2 rounded disabled:opacity-50 transition"
        >
          Suivant
        </button>
      </div>
    </div>
  );
}
