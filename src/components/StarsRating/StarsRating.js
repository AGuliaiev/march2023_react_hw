import React, {useState} from 'react';
import {FaStar} from 'react-icons/fa';
import css from './Stars.module.css'
const StarsRating = ({id, onRatingChange}) => {

    const [ratings, setRatings] = useState({})
    const [hover, setHover] = useState(null);
    const handleRatingChange = (ratingValue) => {
        setRatings((prevRatings) => ({
            ...prevRatings,
            [id]: ratingValue,
        }));


        if (onRatingChange) {
            onRatingChange(id, ratingValue);
        }
    };


    const rating = ratings[id] || null;


    return (
        <div className={css.Stars}>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i +1;
                return (
                <label key={ratingValue}>
                    <input
                        type="radio"
                        name={`rating-${id}`}
                        value={ratingValue}
                        onClick={() => handleRatingChange(ratingValue)}
                    />
                    < FaStar
                        className={css.Star}
                        color={ratingValue <= (hover || rating) ? "yellow" : "grey"}
                        size={30}
                        onMouseEnter={()=> setHover(ratingValue)}
                        onMouseLeave={()=> setHover(null)}
                    />
                </label>
                );
            })}
<p>The rating is {rating}.</p>
        </div>
    );
};

export default StarsRating;
