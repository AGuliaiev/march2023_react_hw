import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "../../components/Header/Header";
import MoviesListCards from "../../components/MoviesListCards/MoviesListCards";

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <MoviesListCards/>
        </div>
    );
};

export default MainLayout;