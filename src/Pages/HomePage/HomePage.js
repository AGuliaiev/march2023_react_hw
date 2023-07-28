import React from 'react';
import MoviesList from "../../components/MoviesList/MoviesList";
import css from '../../components/MoviesListCards/MoviesListCard/Muvies.module.css'
const HomePage = () => {
    return (
        <div className={css.Home}>
            <h1 className={css.Title}>Trending today</h1>
            <MoviesList/>
        </div>
    );
};

export default HomePage;