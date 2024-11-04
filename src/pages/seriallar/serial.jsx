import React, { useState } from "react";
import useFetchData from "../../hooks/fetch";
import Pagination1 from "../../components/pagination/pagination";

const Seriallar = () => {
  const [page, setPage] = useState(1);
  const { data: series = [], loading, error } = useFetchData("tv/top_rated", { page });
  
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="container">
      {loading && <h1 className="loading">Loading...</h1>}
      {error && <h1 className="error">{error}</h1>}
      {!loading && !error && series.length > 0 && (
        <>
          <div className="cards1">
            {series.map((item) => (
              <div className="card1" key={item.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt={item.name}
                  className="card-image1"
                />
                <h3 className="card-title1">{item.name}</h3>
              </div>
            ))}
          </div>
          <Pagination1 count={100} onPageChange={handlePageChange} />
        </>
      )}
    </div>
  );
};

export default Seriallar;
