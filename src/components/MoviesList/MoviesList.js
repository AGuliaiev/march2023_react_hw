import React, {useEffect, useState} from 'react';
import MoviesListCards from "../MoviesListCards/MoviesListCards";
import css from "../MoviesListCards/MoviesListCard/Muvies.module.css"
import {getAllMovies} from "../../service/movieService";




const MoviesList = () => {

    const [listCards, setListCards] = useState([]);
    useEffect(() => {
        getAllMovies().then(value => setListCards(value))


    }, []);

    return (
        <div className={css.moviesList}>

            {listCards.map(listCard=><MoviesListCards key={listCard.id} listCard={listCard}/>)}

        </div>
    );
};

export default MoviesList;


