
import React, { useState } from 'react';
import css from './Muvies.module.css';
import { useNavigate } from 'react-router-dom';
import StarsRating from "../../StarsRating/StarsRating";


const MoviesDetails = ({ info }) => {
    const {
        id,
        title,
        original_language,
        overview,
        popularity,
        poster_path,
        genres,

    } = info;
    const genresStr = genres.map((genre) => genre.name).join(', ');
    const [showImageOnly, setShowImageOnly] = useState(false);
    const navigate = useNavigate();

    return (
        <div>
            <div className={css.wrapper}>
                {showImageOnly ? (
                    <img
                        className={css.Post}
                        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                        alt={title}
                        onClick={() => setShowImageOnly(false)}
                    />
                ) : (
                    <a onClick={() => setShowImageOnly(true)}>
                        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
                    </a>
                )}

                {!showImageOnly && (
                    <div className={css.Info}>
                        <h1>{title}</h1>
                        <p>Жанры: {genresStr}</p>
                        <p>Описание: {overview}</p>
                        <p>Популярность: {popularity}</p>
                        <p>Оригинальный язык: {original_language}</p>
<StarsRating id={id}/>


                    </div>
                )}
            </div>
        </div>
    );
};

export default MoviesDetails;
