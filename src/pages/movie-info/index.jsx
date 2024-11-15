import React from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/fetch";
import styles from "../movie-info/movie.scss"
import FetchById from "../../hooks/fetchByid";



const DetailPage = () => {
    const API_KEY = "f498cd6e0bf1e35ce9129455697a2242";
    const { type, id } = useParams();
    const TMDB_ENDPOINT = "https://api.themoviedb.org/3/movie";


    return (
        <div className="container">
            <FetchById
                endpoint={TMDB_ENDPOINT}
                apiKey={API_KEY}
                id={id}
                renderData={(data) => (
                    <div>
                        <h1>{data.title}</h1>
                        <p>{data.overview}</p>
                        <p>Release Date: {data.release_date}</p>
                        <img src={`https://image.tmdb.org/t/p/w500${data?.backdrop_path}`} alt="" />
                    </div>
                )}
            />
        </div>
    );
};
const SimilarMedia = ({ type, id }) => {
    const { data: similarItems } = useFetchData(`${type}/${id}/similar`);

    return (
        <div className="container">
            <div className="similar-container">
                <h3>Shunga o'xshash {type === "movie" ? "kinolar" : "seriallar"}</h3>
                <div className="similar-cards">
                    {similarItems?.slice(0, 7).map((similar) => (
                        <div className="similar-card" key={similar.id}>
                            <img
                                src={`https://image.tmdb.org/t/p/w500${similar.poster_path}`}
                                alt={similar.title}
                            />
                            <h4>{similar.title || similar.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


export default DetailPage;
