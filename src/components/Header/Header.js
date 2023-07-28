import React from 'react';
import css from './Header.module.css'
import {NavLink} from "react-router-dom";


const Header = () => {
    return (
        <h1 className={css.Header}>
            <NavLink to={'lists'}>Home</NavLink>


        </h1>
    );
};

export default Header;