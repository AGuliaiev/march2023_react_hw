import React from 'react';
import css from './Posters.module.css'
const Poster = ({ poster }) => {


    const { poster_path } = poster;

    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={poster.title} />
        </div>
    );
};

export default Poster;