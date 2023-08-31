import {createBrowserRouter, Navigate} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";



import MoviesPage from "../MoviesPage/MoviesPage";

import MoviesListCard from "../components/MoviesListCards/MoviesListCard/MoviesListCard";
import GenrePage from "../Pages/GenrePage/GenrePage";
import HomePage from "../Pages/HomePage/HomePage";
import GenreWrapper from "../components/GenreBadge/GenreWrapper";
import MoviesList from "../components/MoviesList/MoviesList";
import {getAllMovies} from "../service/movieService";


export const router = createBrowserRouter([
    {
        path:'',
        element:<MainLayout/>,

        children:[
            {
                index: true,
                element:<MoviesList/>,
                // loader:getAllMovies
            },

            {path: 'list',
                element:<HomePage/>
            },


            {
                path: 'lists/:id',
                element:<MoviesListCard/>

            },


            {
                path: 'genres',
                element: <GenreWrapper/>,
                children:[
                    {
                        index: true,
                        element:<MoviesPage/>
                    },
                    {
                        path:"/genres/:id",
                        element:<GenrePage />},

                ]
            },
            {
                path: "*",
                element: <h1>404 Not Found</h1>,
            },


        ]
    }
])