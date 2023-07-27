import React, {useContext} from 'react';
import css from './MoviesListCard/Muvies.module.css'
import {useNavigate} from "react-router-dom";


const MoviesListCards = ({ listCard }) => {
        const { backdrop_path, title, original_language, id } = listCard;
        const navigate=useNavigate();



    return (
<div className={css.cardBlock}>
    <a className={css.link} onClick={()=>navigate(`lists/${id}`)}>

                <div className={css.Block}>

                <img className={css.Img} src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt={title} />


                    <h2>{title}</h2>
                <p className={css.Page}>Original Language: {original_language}</p>
                <p> ID: {id}</p>

                </div>

    </a>
</div>

    );
};

export default MoviesListCards;