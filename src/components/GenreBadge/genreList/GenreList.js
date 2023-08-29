import React, { useEffect, useState } from 'react';
import css from '../Gener.module.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import GenreMovies from './GenreMovies';

const GenreList = () => {
    const [movies, setMovies] = useState([]);
    const [genreName, setGenreName] = useState('');
    const { id } = useParams();

    useEffect(() => {
        const apiKey = 'ddb43a60b8283b1dccd0de534703fffa';

        // Запрос списка жанров
        axios
            .get('https://api.themoviedb.org/3/genre/movie/list', {
                params: {
                    api_key: apiKey,
                    language: 'en-US'
                }
            })
            .then(({ data }) => {
                const matchedGenre = data.genres.find(genre => genre.id === parseInt(id));
                if (matchedGenre) {
                    setGenreName(matchedGenre.name);
                }
            })
            .catch((error) => console.error(error));

        // Запрос фильмов по жанру
        axios
            .get(
                `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${id}&language=en-US&page=1&include_adult=false`
            )
            .then(({ data }) => setMovies(data.results))
            .catch((error) => console.error(error));
    }, [id]);

    return (
        <div className={css.listGenre}>
            {genreName && <h2>{genreName}</h2>}
            {movies.length > 0 &&
                movies.map(movie => (
                    <GenreMovies
                        key={movie.id}
                        movie={movie}
                        genres={genreName}
                    />
                ))}
        </div>
    );
};

export default GenreList;
