import React from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/fetch";
import styles from "./DetailPage.module.scss";

const DetailPage = () => {
    const { type, id } = useParams(); // URL orqali `type` va `id`ni olish
    const { data: item, loading, error } = useFetchData(`${type}/${id}`);

    if (loading) return <h1 className={styles.loading}>Yuklanmoqda...</h1>;
    if (error) return <h1 className={styles.error}>Xato yuz berdi...</h1>;

    return (
        <div className={styles.detailContainer}>
            <div className={styles.mainContent}>
                <img
                    src={`https://image.tmdb.org/t/p/w500${item?.poster_path}`}
                    alt={item?.title || item?.name}
                    className={styles.poster}
                />
                <div className={styles.info}>
                    <h2>{item?.title || item?.name}</h2>
                    <p>{item?.overview}</p>
                    <p><strong>Reyting:</strong> {item?.vote_average}</p>
                    <p><strong>Chiqarilgan sana:</strong> {item?.release_date || item?.first_air_date}</p>
                </div>
            </div>

            {/* O'xshash kinolar / seriallar */}
            <SimilarMedia type={type} id={id} />
        </div>
    );
};

const SimilarMedia = ({ type, id }) => {
    const { data: similarItems } = useFetchData(`${type}/${id}/similar`);

    return (
        <div className={styles.similarContainer}>
            <h3>Shunga o'xshash {type === "movie" ? "kinolar" : "seriallar"}</h3>
            <div className={styles.similarCards}>
                {similarItems?.map((similar) => (
                    <div className={styles.similarCard} key={similar.id}>
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

export default DetailPage;
