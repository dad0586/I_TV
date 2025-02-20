import axios from "axios";
import { useEffect, useState } from "react";
import Tv from "../tv/main.scss";
import useFetchData from "../../hooks/fetch";
import Pagination1 from "../../components/pagination/pagination";
import { Link } from "react-router-dom";

const API_KEY = "f498cd6e0bf1e35ce9129455697a2242";
const BASE_URL = "https://api.themoviedb.org/3/tv/popular";
const DESIRED_COUNT = 18;

const TV = () => {
  const [page, setPage] = useState(1);
  const { data: shows, loading, error } = useFetchData("tv/popular", {
    desiredCount: 16,
    page
  });
  return (
    <div className="container">
      <div className="cards">
        {shows?.map((product) => (
          <Link to={`/movie/${product?.id}`} className="card1" key={product.id}>
            <img
              src={"https://image.tmdb.org/t/p/w500" + product?.poster_path}
              alt={product?.title}
            />
            <h3 className="card-title1">{product.name}</h3>
          </Link>
        ))}

      </div>
      <Pagination1 count={500} onPageChange={setPage} />
    </div>
  );
};

export default TV;
