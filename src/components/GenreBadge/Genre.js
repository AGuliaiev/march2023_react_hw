import React from 'react';
import css from '../GenreBadge/Gener.module.css'
import {useNavigate} from "react-router-dom";

const Genre = ({genre}) => {

    const {name, id} = genre;
    const navigate = useNavigate();
    return (
          <div className={css.wrapper} onClick={()=>navigate(`/genres/${id}`)}>
            <a className={css.link} >
            <div> {name}</div>
            </a>
        </div>

    );
};

export default Genre;