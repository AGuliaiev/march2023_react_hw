import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';

const StarsR = () => {
    const [rating, setRating] = useState(0);

    const changeRating = (newRating) => {
        setRating(newRating);
    };

    return (
        <StarRatings
            rating={rating}
            starRatedColor="gold"
            changeRating={changeRating}
            numberOfStars={6}
            name='rating'
        />
    );
};

const Bar = () => {
    return (
        <StarRatings
            rating={2.403}
            starDimension="40px"
            starSpacing="15px"
        />
    );
};

export { StarsR, Bar };
