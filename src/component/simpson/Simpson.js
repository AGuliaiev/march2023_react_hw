import React from 'react';
import './Simpson.css';
const Simpson = ({name, surname, age, gender, photo}) => {

    return (
        <div className={'member'}>
            <h2>{name} {surname} {age}</h2>
            <img src={photo} alt={name}/>
            <h2>{gender}</h2>

        </div>
    );
};

export default Simpson;