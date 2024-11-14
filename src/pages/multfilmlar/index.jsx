import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const API_KEY = "41ee00ef54c639e104c9b60ce5d3736b";
const BASE_URL = "https://api.themoviedb.org/3";

const Multfilmlar = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAnimatedMovies = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16&sort_by=popularity.desc`
        );
        setMovies(response.data.results || []);
      } catch (err) {
        setError("Error fetching animated movies.");
        console.error("Error fetching animated movies:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAnimatedMovies();
  }, []);

  const handleMovieClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <div className="container">
      {loading && <h1 className="loading">Loading...</h1>}
      {error && <h1 className="error">{error}</h1>}
      {!loading && !error && (
        <div className="cards1">
          {movies.map((movie) => (
            <Link className="card1" key={movie.id} onClick={() => handleMovieClick(movie.id)}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="card-image1"
              />
              <h3 className="card-title1">{movie.title}</h3>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Multfilmlar;
