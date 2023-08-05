import React, {useState} from 'react';
import {FaStar} from 'react-icons/fa';
import css from './Stars.module.css'
const StarsRating = ({id}) => {

    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null);
    // const handleRatingChange = (ratingValue) => {
    //     setRating(ratingValue);
    //     setRatings((prevRatings) => ({
    //         ...prevRatings,
    //         [movieId]: ratingValue,
    //     }));
    // };
    return (
        <div className={css.Stars}>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i +1;
                return (
                <label>
                    <input
                        type="radio"
                        name="rating"
                        value={ratingValue}
                        onClick={()=>setRating(ratingValue)}

                    />
                    <FaStar
                        className={css.Star}
                        color={ratingValue <= (hover || rating) ? "yellow" : "grey"}
                        size={30}
                        onMouseEnter={()=> setHover(ratingValue)}
                        onMouseLeave={()=> setHover(null)}
                    />
                </label>
                );
            })}

        </div>
    );
};

export default StarsRating;