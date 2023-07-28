import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "../../components/Header/Header";

import css from './MainLayut.module.css'
import GenreBadge from "../../components/GenreBadge/GenreBadge";

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <div className={css.main}>
            <div className={css.Genre}><GenreBadge/></div>
            <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;