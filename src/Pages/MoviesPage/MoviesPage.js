import React, {createContext, useState} from 'react';
import MoviesList from "../../components/MoviesList/MoviesList";
import {Outlet} from "react-router-dom";

const MoviesPage = () => {

    return (
        <div>

                <MoviesList/>
            <Outlet/>


        </div>
    );
};

export default MoviesPage;