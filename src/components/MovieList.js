import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, title, rating}) => {
  const t1 = movies.filter(el => el.title.toLowerCase().includes(title.toLowerCase()) && el.rating>=rating)
return  (
  <div className="movie-list">
  {t1.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
  </div>
  )
};

export default MovieList;