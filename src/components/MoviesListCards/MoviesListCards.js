import React from 'react';
import css from './MoviesListCard/Muvies.module.css'

const MoviesListCards = ({ listCard }) => {
        const { backdrop_path, title, original_language, genre_ids } = listCard;

    return (
<div class={css.cardBlock}>
    <a className={css.link}>
            <div className={css.ButtonContainer}>
                <div className={css.Block}>

                <img className={css.Img} src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt={title} />


                    <h2>{title}</h2>
                <p className={css.Page}>Original Language: {original_language}</p>
                {/*<p>Genre IDs: {genre_ids.join(', ')}</p>*/}

                </div>
            </div>
    </a>
</div>

    );
};

export default MoviesListCards;