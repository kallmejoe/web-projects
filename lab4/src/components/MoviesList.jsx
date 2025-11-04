import  { useState } from 'react';
import MovieCard from './MovieCard';
import AddMovieDialog from './AddMovieDialog';
import './MoviesList.css';

const MoviesList = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      name: 'Inception',
      rating: 5,
      comment: 'A mind-bending thriller with stunning visuals.'
    },
    {
      id: 2,
      name: 'The Dark Knight',
      rating: 5,
      comment: 'An intense and gripping superhero film.'
    },
    {
      id: 3,
      name: 'Interstellar',
      rating: 4,
      comment: 'A visually spectacular journey through space and time.'
    }
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAddMovie = (newMovie) => {
    const movieWithId = {
      ...newMovie,
      id: Math.random() // Unique ID generation
    };
    setMovies(prev => [...prev, movieWithId]);
  };

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  return (
    <div className="movies-container">
      <div className="movies-header">
        <h1>My Movie Collection</h1>
        <button className="add-movie-button" onClick={openDialog}>
          + Add Movie
        </button>
      </div>

      <div className="movies-grid">
        {movies.length === 0 ? (
          <div className="empty-state">
            <p>No movies in your collection yet.</p>
            <p>Click "Add Movie" to get started!</p>
          </div>
        ) : (
          movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} onDelete={() => setMovies(movies.filter(m => m.id !== movie.id))} />
          ))
        )}
      </div>

      <AddMovieDialog
        isOpen={isDialogOpen}
        onClose={closeDialog}
        onAddMovie={handleAddMovie}
      />
    </div>
  );
};

export default MoviesList;
