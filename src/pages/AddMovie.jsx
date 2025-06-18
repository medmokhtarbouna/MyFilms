// src/pages/AddMovie.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddMovie() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setPreviewUrl(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Use URL > Uploaded file preview > placeholder
    const image = imageUrl.trim() || previewUrl || '/placeholder.jpg';
    const customMovies = JSON.parse(localStorage.getItem('customMovies') || '[]');
    customMovies.push({
      title,
      description,
      date,
      image,
      rating
    });
    localStorage.setItem('customMovies', JSON.stringify(customMovies));

    navigate('/');
  };

  return (
    <div className="max-w-3xl mx-auto mt-8 p-6 bg-gray-800 rounded-lg shadow-lg text-gray-200">
      <h1 className="text-3xl font-extrabold bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent mb-6">
        Ajouter un film
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label className="block mb-2 font-medium">Titre *</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Entrez le titre du film"
            className="w-full bg-gray-700 text-gray-200 placeholder-gray-500 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-2 font-medium">Description *</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            placeholder="Entrez une brève description"
            className="w-full bg-gray-700 text-gray-200 placeholder-gray-500 rounded-lg px-4 py-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
        </div>

        {/* Release Date */}
        <div>
          <label className="block mb-2 font-medium">Date de sortie</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full bg-gray-700 text-gray-200 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="block mb-2 font-medium">URL de l'affiche</label>
          <input
            type="url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="https://..."
            className="w-full bg-gray-700 text-gray-200 placeholder-gray-500 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
        </div>

        {/* Local Upload */}
        <div>
          <label className="block mb-2 font-medium">Ou téléchargez une image</label>
          <label className="inline-flex items-center bg-gray-700 text-gray-200 rounded-full px-4 py-2 cursor-pointer hover:bg-gray-600 transition">
            Choisir un fichier
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        </div>

        {/* Preview */}
        <div>
          <label className="block mb-2 font-medium">Aperçu de l'affiche</label>
          
          {(previewUrl || imageUrl) && (<img
            src={previewUrl || imageUrl}
            alt="Preview"
            className="w-32 h-48 object-cover rounded-lg"
          />)}
          
        </div>

        {/* Rating */}
        <div>
          <label className="block mb-2 font-medium">Note (0-10)</label>
          <input
            type="number"
            min="0"
            max="10"
            step="0.5"
            value={rating}
            onChange={(e) => setRating(parseFloat(e.target.value))}
            className="w-24 bg-gray-700 text-gray-200 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium py-3 rounded-full transition"
        >
          Ajouter
        </button>
      </form>
    </div>
  );
}
