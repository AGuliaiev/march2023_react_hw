import React from 'react';
import css from './Muvies.module.css'
import { useNavigate} from "react-router-dom";
const MoviesDetails = ({info}) => {
    console.log(info)
    const {
        title,
        original_language,
        overview,
        popularity,
        poster_path,
        genres} = info;
    const genresStr = genres.map(genre => genre.name).join(', ');
    const navigate = useNavigate();

    return (
        <div>
            <button onClick={()=>navigate('/lists')}>← Go back</button>
            <div className={css.wrapper}>
                <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
                <div className={css.Info}>
                <h1>{title}</h1>
                <p>Genres: {genresStr}</p>
                <p>Overview: {overview}</p>
                <p>Popularity: {popularity}</p>
                <p>Original Language: {original_language}</p>


                </div>
            </div>
        </div>
    );
};

export default MoviesDetails;