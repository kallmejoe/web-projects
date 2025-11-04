import React from 'react';
import './MovieCard.css';


const MovieCard = ({ movie, onDelete }) => {
  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <div className="movie-card">
      <div className="movie-card-header">
        <h3 className="movie-title">{movie.name}</h3>
        <div className="movie-rating">
          <span className="stars">{renderStars(movie.rating)}</span>
          <span className="rating-number">({movie.rating}/5)</span>
        </div>
      </div>
      <div className="movie-card-body">
        <p className="movie-comment">{movie.comment}</p>
        {onDelete && (
          <button className="delete-movie-button" onClick={onDelete}>
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default MovieCard;