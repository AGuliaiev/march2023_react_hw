import React, { useEffect, useState } from 'react';
import {Outlet, useParams} from "react-router-dom";
import axios from "axios";
import css from '../Gener.module.css'
import GenreMovies from "./GenreMovies";

const GenreList = () => {
    const [movies, setMovies] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const apiKey = 'ddb43a60b8283b1dccd0de534703fffa';
        axios
            .get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${id}&language=en-US&page=1&include_adult=false`)
            .then(({ data }) => setMovies(data.results))
            .catch((error) => console.error(error));
    }, [id]);

    return (
        <div className={css.listGenre}>

            {movies.length > 0 && movies.map(movie=> <GenreMovies key={movie.id} movie={movie} />)}

        </div>
    );
};

export default GenreList;
