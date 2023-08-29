import React, {useEffect, useState} from 'react';
import axios from "axios";
import MoviesListCards from "../MoviesListCards/MoviesListCards";
import css from "../MoviesListCards/MoviesListCard/Muvies.module.css"




const MoviesList = () => {
    const [listCards, setListCards] = useState([]);
    console.log(listCards)
    useEffect(() => {
        const apiKey = 'ddb43a60b8283b1dccd0de534703fffa';
        axios

            .get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`)
            .then(({ data }) => setListCards(data.results))
            .catch((error) => console.error(error));

    }, []);

    return (
        <div className={css.moviesList}>

            {listCards.map(listCard=><MoviesListCards key={listCard.id} listCard={listCard}/>)}

        </div>
    );
};

export default MoviesList;


