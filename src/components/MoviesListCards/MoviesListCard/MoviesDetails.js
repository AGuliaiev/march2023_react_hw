
import React, { useState } from 'react';
import css from './Muvies.module.css';
import { useNavigate } from 'react-router-dom';
import Rating from "../../StarsRating/Rating"



const MoviesDetails = ({ info }) => {
    console.log(info)
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

    const handleRatingChange = (movieId, ratingValue) => {
        console.log('Movie ID:', movieId, 'Rating:', ratingValue);
        // Here you can handle saving the rating of the movie with the given movieId
        // For now, we are just logging the values.
    };


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
                        {/*<StarsRating id={id} onRatingChange={handleRatingChange}/>*/}
                        <Rating/>


                    </div>
                )}
            </div>
        </div>
    );
};

export default MoviesDetails;
