import React from 'react';
import css from './Header.module.css'
import {NavLink} from "react-router-dom";


const Header = () => {
    return (
        <h1 className={css.Header}>
            <NavLink to={'list'}>Home</NavLink>
            <NavLink to={'poster'}>Posters</NavLink>
            {/*<NavLink to={'video'}>Video</NavLink>*/}


        </h1>
    );
};

export default Header;