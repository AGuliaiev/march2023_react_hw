import React from 'react';
import css from './Header.module.css'
import {NavLink} from "react-router-dom";
const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={'TODOS'}>TODOS</NavLink>
            <NavLink to={'ALBUMS'}>ALBUMS</NavLink>
            <NavLink to={'COMMENTS'}>COMMENTS</NavLink>
        </div>
    );
};

export {Header};