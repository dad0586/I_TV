import React, { useState } from "react";
import useFetchData from "../../hooks/fetch";
import Pagination1 from "../../components/pagination/pagination";

const Filmlar = () => {
  const [page, setPage] = useState(1);
  const { data: movies, loading, error } = useFetchData("movie/top_rated", { page });

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="container">
      {loading && <h1 className="loading">Loading...</h1>}
      {error && <h1 className="error">{error}</h1>}
      {!loading && !error && movies.length > 0 && (
        <>
          <div className="cards1">
            {movies.map((movie) => (
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
          <Pagination1 count={100} onPageChange={handlePageChange} />
        </>
      )}
    </div>
  );
};

export default Filmlar;
