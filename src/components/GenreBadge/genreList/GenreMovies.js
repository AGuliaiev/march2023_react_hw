import React from 'react';
import css from '../Gener.module.css'
import { useNavigate} from "react-router-dom";
const GenreMovies = ({ movie }) => {
    console.log(movie)
    const {poster_path, title, id} = movie;
    const navigate = useNavigate();

    return (
        <div>



            <a className={css.link} onClick={()=>navigate(`/lists/${id}`)}>
            <div className={css.block}>
            <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={title}
            />
            <h2>{title}</h2>

            </div>
            </a>

        </div>
    );
};

export default GenreMovies;
