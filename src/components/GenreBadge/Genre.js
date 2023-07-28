import React from 'react';
import css from '../GenreBadge/Gener.module.css'

const Genre = ({gener}) => {
    console.log(gener)
    const {name} = gener;
    return (
          <div className={css.wrapper}>
            <a className={css.link}>
            <div> {name}</div>
            </a>
        </div>

    );
};

export default Genre;