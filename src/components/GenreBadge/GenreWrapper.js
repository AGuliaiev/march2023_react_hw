import React from 'react';

import GenreBadge from "./GenreBadge";

import css from './Gener.module.css'

import {Outlet} from "react-router-dom";
import GenreList from "./genreList/GenreList";

const GenreWrapper = () => {
    return (
        <div className={css.AllPage}>
             <GenreBadge/>
            <GenreList/>
            <Outlet />


        </div>
    );
};

export default GenreWrapper;