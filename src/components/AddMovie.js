import React, { useState } from 'react';

const AddMovie = ({ addMovie }) => {
    const [movie, setMovie] = useState({
      title: '',
      date: '',
      genre: '',
      description: '',
      posterURL: '',
      trailerSrc: '',
      rating: '',
    });
  
    const { title, description, posterURL, trailerSrc,  rating } = movie;
  
    const handleChange = e => {
      setMovie({ ...movie, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = e => {
      e.preventDefault();
      const newMovie = { ...movie, rating: Number(movie.rating), id: Date.now() };
      addMovie(newMovie);
      setMovie({
        title: '',
        date: '',
        genre: '',
        description: '',
        posterURL: '',
        trailerSrc: '',
        rating: '',
      });
    };

  return (
    <div className="add-movie">
      <h2>Add a new movie</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={title} onChange={handleChange} />
        </label>
        <label>
          Description:
          <input type="text"  name="description" value={description} onChange={handleChange} />
        </label>
        <label>
          Poster URL:
          <input type="text" name="posterURL" value={posterURL} onChange={handleChange} />
        </label>
        <label>
          Rating:
          <input type="number" name="rating" min={0} max={5} value={rating} onChange={handleChange} />
        </label>
        <label>
            TrailerSrc:
            <input type="text" name="trailerSrc" value={trailerSrc} onChange={handleChange}/>
        </label>
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
}

export default AddMovie;