import React, { useState } from "react";
import useFetchData from "../../hooks/fetch";
import Pagination1 from "../../components/pagination/pagination";
import { Link } from "react-router-dom";

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
            {series?.map((item) => (
              <Link to={`/movie/${item?.id}`} className="card1" key={item.id}>
                <img
                  src={"https://image.tmdb.org/t/p/w500" + item?.poster_path}
                  alt={item?.title}
                />
                <h3 className="card-title1">{item.name}</h3>
              </Link>
            ))}
          </div>
          <Pagination1 count={100} onPageChange={handlePageChange} />
        </>
      )}
    </div>
  );
};

export default Seriallar;
