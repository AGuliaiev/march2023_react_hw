import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "../../components/Header/Header";
import GenrePage from "../../Pages/GenrePage/GenrePage";
import css from './MainLayut.module.css'

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <div className={css.main}>
            <div className={css.Genre}><GenrePage/></div>
            <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;