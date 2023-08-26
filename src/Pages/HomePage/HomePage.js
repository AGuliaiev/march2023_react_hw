import React from 'react';
import MoviesList from "../../components/MoviesList/MoviesList";
import css from '../../components/MoviesListCards/MoviesListCard/Muvies.module.css'
import PaginationRounded from "../../components/PaginationRounded/PaginationRounded";

import Rating from '../../components/StarsRating/Rating'


const HomePage = () => {
    return (
        <div className={css.Home}>
            <h1 className={css.Title}>Trending today</h1>
            <MoviesList/>
            <Rating/>
            <PaginationRounded/>


        </div>
    );
};

export default HomePage;