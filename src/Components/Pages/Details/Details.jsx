import s from "./Details.module.scss";
import { DetailsPoster, DetailsInfo } from "../../index";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../../../apiConfig/apiRequest";

function Details() {

    const [movie, setMovie] = useState({ genres: [] });


    const params = useParams();

    useEffect(() => {

        async function fetchMovieDetails() {

            const data = await getMovieDetails(params.id);

            setMovie(data);
        }

        fetchMovieDetails();
    }, [params.id]);

    return (

        <div className={s.details}>
            <DetailsPoster data={movie} />
            <DetailsInfo data={movie} />
        </div>
    );
}

export default Details;
