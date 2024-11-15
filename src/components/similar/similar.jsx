import React from "react";
import useFetchData from "../../hooks/fetch";
// import styles from "./similarMedia.scss";

const SimilarMedia = ({ type, id, apiKey }) => {
    const TMDB_ENDPOINT = `https://api.themoviedb.org/3/${type}/${id}/similar?api_key=${apiKey}`;
    const { data: similarItems, loading, error } = useFetchData(TMDB_ENDPOINT);

    if (loading) return <p>Yuklanmoqda...</p>;
    if (error) return <p>Xato yuz berdi: {error}</p>;

    return (
        <div className="similar-container">
            <h3>Shunga o'xshash {type === "movie" ? "kinolar" : "seriallar"}</h3>
            <div className="similar-cards">
                {similarItems?.results?.slice(0, 7).map((similar) => (
                    <div className="similar-card" key={similar.id}>
                        <img
                            src={`https://image.tmdb.org/t/p/w500${similar.poster_path}`}
                            alt={similar.title || similar.name}
                        />
                        <h4>{similar.title || similar.name}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SimilarMedia;
