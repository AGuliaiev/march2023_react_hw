// import React from 'react';
// import css from './MoviesListCard/Muvies.module.css'
// import {useNavigate} from "react-router-dom";
//
// import Rating from "../StarsRating/Rating";
//
//
//
// const MoviesListCards = ({ listCard }) => {
//     // console.log(listCard)
//         const { backdrop_path, title, id } = listCard;
//         const navigate=useNavigate();
//
//
//
//     return (
// <div className={css.cardBlock}>
//     <a className={css.link} onClick={()=>navigate(`/lists/${id}`)}>
//
//
//                 <div className={css.Block}>
//
//                 <img className={css.Img} src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt={title} />
//                    <h2 >{title}</h2>
//
//
//
//
//                 </div>
//
//     </a>
//     {/*<StarsRating/>*/}
//     <Rating/>
//
//
//
// </div>
//
//     );
// };
//
// export default MoviesListCards;
import React, { useState } from 'react';
import css from './MoviesListCard/Muvies.module.css';
import { useNavigate } from 'react-router-dom';

import Rating from '../StarsRating/Rating';

const MoviesListCards = ({ listCard }) => {
    const { backdrop_path, title, id } = listCard;
    const navigate = useNavigate();

    const [rating, setRating] = useState(0); // Инициализируем состояние рейтинга

    return (
        <div className={css.cardBlock}>
            <a className={css.link} onClick={() => navigate(`/lists/${id}`)}>
                <div className={css.Block}>
                    <img
                        className={css.Img}
                        src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
                        alt={title}
                    />
                    <h2>{title}</h2>
                </div>
            </a>

            <Rating
                value={rating} // Передаем текущее состояние рейтинга
                onChange={(newValue) => setRating(newValue)} // Устанавливаем новое состояние рейтинга
            />
        </div>
    );
};

export default MoviesListCards;
