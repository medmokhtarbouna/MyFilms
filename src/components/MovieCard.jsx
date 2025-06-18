// src/components/MovieCard.jsx
import { Link } from 'react-router-dom';
import { FiEye, FiStar, FiClock, FiCalendar } from 'react-icons/fi';

export default function MovieCard({ movie }) {
  // Determine poster URL
  const posterUrl = movie.source === 'custom'
    ? movie.image
    : movie.poster_path
      ? `https://image.tmdb.org/t/p/w400${movie.poster_path}`
      : '/placeholder.png';

  // Determine rating, date, vote count
  const rating = movie.source === 'custom'
    ? movie.rating
    : movie.vote_average.toFixed(1);
  const releaseDate = movie.source === 'custom'
    ? movie.date
    : movie.release_date;
  const voteCount = movie.source === 'custom'
    ? null
    : movie.vote_count.toLocaleString();

  return (
    <Link
      to={
        movie.source === 'custom'
          ? `/film/custom-${movie.idIndex}`
          : `/film/${movie.id}`
      }
      className="block"
    >
      <div className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-xl group hover:shadow-2xl transition-shadow">
        {/* Wrapper to enforce 2:3 aspect ratio */}
        <div className="relative w-full pb-[150%] overflow-hidden">
          <img
            src={posterUrl}
            alt={movie.title}
            className="absolute top-0 left-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform"
          />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75 group-hover:opacity-50 transition-opacity" />

        {/* Movie info */}
        <div className="absolute bottom-4 left-4 right-4 text-gray-200">
          <h3 className="text-lg font-bold truncate mb-1">{movie.title}</h3>
          <div className="flex flex-wrap items-center text-sm space-x-4">
            <span className="flex items-center">
              <FiStar className="mr-1 text-yellow-400" />
              {rating}
            </span>

            {releaseDate && (
              <span className="flex items-center">
                <FiCalendar className="mr-1" />
                {releaseDate}
              </span>
            )}

            {voteCount && (
              <span className="flex items-center">
                <FiEye className="mr-1" />
                {voteCount}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
