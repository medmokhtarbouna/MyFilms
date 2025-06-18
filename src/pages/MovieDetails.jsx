// src/pages/MovieDetails.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../api/tmdb';
import { FiCalendar, FiStar, FiEye, FiClock } from 'react-icons/fi';

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id.startsWith('custom-')) {
      const customMovies = JSON.parse(localStorage.getItem('customMovies') || '[]');
      const index = parseInt(id.split('-')[1], 10);
      const custom = customMovies[index];
      if (custom) setMovie({ ...custom, source: 'custom' });
      setLoading(false);
    } else {
      fetchMovieDetails(id)
        .then(({ data }) => setMovie({ ...data, source: 'api' }))
        .catch(console.error)
        .finally(() => setLoading(false));
    }
  }, [id]);

  if (loading) return <div className="flex items-center justify-center h-full text-gray-400">Chargement...</div>;
  if (!movie) return <div className="text-gray-400 text-center">Film non trouvé.</div>;

  const posterUrl = movie.source === 'custom'
    ? movie.image
    : movie.poster_path
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : '/placeholder.png';

  const runtimeText = movie.source==='api' && movie.runtime ? `${Math.floor(movie.runtime/60)}h ${movie.runtime%60}m` : '—';
  const rating = movie.source==='custom' ? movie.rating : movie.vote_average.toFixed(1);
  const releaseDate = movie.source==='custom' ? movie.date : movie.release_date;
  const overview = movie.source==='custom' ? movie.description : movie.overview;
  const voteCount = movie.source==='custom' ? '-' : movie.vote_count.toLocaleString();

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-gray-800 rounded-lg shadow-lg text-gray-200">
      <div className="flex flex-col md:flex-row items-start md:space-x-6">
        <img src={posterUrl} alt={movie.title} className="w-full md:w-1/3 rounded-lg object-cover" />
        <div className="flex-1 space-y-4 mt-4 md:mt-0">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent">{movie.title}</h1>
          <p className="text-gray-300">{overview}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center">
              <FiCalendar className="mr-2 text-purple-400" />
              <span className="font-semibold text-white">{releaseDate}</span>
            </div>
            <div className="flex items-center">
              <FiStar className="mr-2 text-yellow-400" />
              <span className="font-semibold text-white">{rating}</span>
            </div>
            {movie.source==='api' && <div className="flex items-center"><FiClock className="mr-2 text-pink-400" /><span className="font-semibold text-white">{runtimeText}</span></div>}
            <div className="flex items-center sm:col-span-2"><FiEye className="mr-2 text-gray-400" /><span className="font-semibold text-white">{voteCount}</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
