import React, { useState, useEffect } from "react";
import axios from "axios";
import './Movies.css';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const selectedGenres = JSON.parse(localStorage.getItem("imageID"));

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const genresArray = Array.isArray(selectedGenres) ? selectedGenres : [];

    const apiKey = 'bd1a6218b87be13e27c8bfd5906f453c';
    const moviesData = [];

    for (const genre of genresArray) {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genre}`
      );

      moviesData.push({
        genre: genre,
        movies: response.data.results,
      });
    }

    setMovies(moviesData);
  };

  return (
    <div className="wrapperMovies">
      <h1>Super App</h1>
      <div className="movie-list">
        {movies.map((genreMovies, index) => (
          <div key={index} className="genre-section">
            <h2>{genreMovies.genre} Movies</h2>
            {genreMovies.movies.map((movie, movieIndex) => (
              <div key={movieIndex} className="movie">
                <img
                  src={`https://image.tmdb.org/t/p/w185${getRandomMovie(genreMovies.movies).poster_path}`}
                  alt={movie.title}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );

  function getRandomMovie(movies) {
    const randomIndex = Math.floor(Math.random() * movies.length);
    return movies[randomIndex];
  }
}
