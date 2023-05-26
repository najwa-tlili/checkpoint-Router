import React from 'react';
import { Link } from 'react-router-dom';
import Rate from './Rate';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <div className="movie-rating">{movie.rating}</div>
      <img src={movie.posterURL} alt={movie.title} style={{ height: '150px', width: '150px' }} />
      <div className="movie-description">
        {movie.description}
        <Rate rating={movie.rating} />
        <h4 className="movie-title">{movie.title}</h4>
        <Link to={`/movies/${movie.id}`}>Read More</Link>
      </div>
    </div>
  );
};

export default MovieCard;
