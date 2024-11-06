import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieInfo = () =>{
    const { movieId } = useParams()
    const [data, setData] = useState()
    useEffect(() => {
        axios
            .get (
                `https://api.themoviedb.org/3/movie/${movieId}`
            )
            .then(function (response){
                console.log (response);
                setData(response?.data);
            })
            .catch (function (error) {
                console.error("Error fetching data", error);
            })
    }, [] );
    return(
        <>
        
        </>
    )
}
export default MovieInfo;