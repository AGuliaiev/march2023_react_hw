import React, {useEffect, useState} from 'react';
import axios from "axios";
import Genre from "./Genre";
import css from './Gener.module.css'
import GenreList from "./genreList/GenreList";






const GenreBadge = () => {
    const [genres, setGenre] = useState([]);
    useEffect(()=> {
        const apiKey = 'ddb43a60b8283b1dccd0de534703fffa';
        axios
            .get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)
            .then(({data})=> setGenre(data.genres))
            .catch((error) => console.error(error));

    },[])

    return (
        <>

            <div className={css.Genre}>
            <h1 className={css.title}>Genres</h1>

            {genres.map(genre=><Genre key={genre.id} genre={genre}/>)}


        </div>
        </>
    );
};

export default GenreBadge;