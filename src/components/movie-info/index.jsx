import React from "react";
import { useParams } from "react-router-dom";
import FetchById from "../../hooks/fetchByid";
import styles from "./movie.scss";
import SimilarMedia from "../similar/similar";

const DetailPage = () => {
    const API_KEY = "f498cd6e0bf1e35ce9129455697a2242"; // O'zingizning TMDB API kalitingizni kiriting
    const { type, id } = useParams(); // `type` (movie yoki tv) va `id` ni oladi
    const TMDB_ENDPOINT = `https://api.themoviedb.org/3/${type}`;

    return (
        <div className="container1">
            <FetchById
                endpoint={TMDB_ENDPOINT}
                apiKey={API_KEY}
                id={id}
                renderData={(data) => (
                    <div className="info_change">
                        <div className="info_right">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${data?.backdrop_path}`}
                            alt={data.title || data.name}
                        />
                        </div>
                        <div className="info_left">
                        <h1 className="movie-info_title">{data.title || data.name}</h1>
                        <p className="chiqarilgan_sana">Chiqarilgan sana: {data.release_date || data.first_air_date}</p>
                        <p>{data.overview}</p>
                        </div>
                    </div>
                )}
            />

            {/* <SimilarMedia type={type} id={id} apiKey={API_KEY} /> */}
        </div>
    );
};

export default DetailPage;
