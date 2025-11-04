import React, { useState } from 'react';
import './AddMovieDialog.css';

const AddMovieDialog = ({ isOpen, onClose, onAddMovie }) => {
  const [movieData, setMovieData] = useState({
    name: '',
    rating: 5,
    comment: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (movieData.name.trim() && movieData.comment.trim()) {
      onAddMovie(movieData);
      setMovieData({ name: '', rating: 5, comment: '' });
      onClose();
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMovieData(prev => ({
      ...prev,
      [name]: name === 'rating' ? parseInt(value) : value
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="dialog-overlay" onClick={onClose}>
      <div className="dialog-content" onClick={e => e.stopPropagation()}>
        <div className="dialog-header">
          <h2>Add New Movie</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        
        <form onSubmit={handleSubmit} className="dialog-form">
          <div className="form-group">
            <label htmlFor="name">Movie Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={movieData.name}
              onChange={handleInputChange}
              placeholder="Enter movie name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="rating">Rating</label>
            <select
              id="rating"
              name="rating"
              value={movieData.rating}
              onChange={handleInputChange}
            >
              <option value={1}>1 Star</option>
              <option value={2}>2 Stars</option>
              <option value={3}>3 Stars</option>
              <option value={4}>4 Stars</option>
              <option value={5}>5 Stars</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="comment">Comment</label>
            <textarea
              id="comment"
              name="comment"
              value={movieData.comment}
              onChange={handleInputChange}
              placeholder="Write your review..."
              rows={4}
              required
            />
          </div>

          <div className="dialog-actions">
            <button type="button" className="cancel-button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="add-button">
              Add Movie
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMovieDialog;