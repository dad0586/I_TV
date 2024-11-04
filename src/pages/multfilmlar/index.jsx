import React, { useState } from "react";
import useFetchData from "../../hooks/fetch";
import Pagination1 from "../../components/pagination/pagination";

const API_KEY = "41ee00ef54c639e104c9b60ce5d3736b";
const BASE_URL = "https://api.themoviedb.org/3/";
const DESIRED_COUNT = 18;

const Multfilmlar = () => {
  const [page, setPage] = useState(1);
  // https://api.themoviedb.org/3/discover/movie?api_key=YOUR_API_KEY&with_genres=16
  const { data: shows, loading, error } = useFetchData("discover/movie", {
    desiredCount: 16,
    page
  });
  return (
    <div className="container">
        <div className="cards1">
          {shows.map((movie) => (
            <div className="card1" key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="card-image1"
              />
              <h3 className="card-title1">{movie.title}</h3>
            </div>
          ))}
        </div>
        <Pagination1 count={100} onPageChange={setPage} />
    </div>
  );
};

export default Multfilmlar;
