import React from 'react';

import GenreBadge from "./GenreBadge";

import css from './Gener.module.css'

import {Outlet} from "react-router-dom";


const GenreWrapper = () => {
    return (
        <div className={css.AllPage}>
             <GenreBadge/>
             <Outlet />


        </div>
    );
};

export default GenreWrapper;