import {createBrowserRouter, Navigate} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";



import MoviesPage from "../MoviesPage/MoviesPage";

import MoviesListCard from "../components/MoviesListCards/MoviesListCard/MoviesListCard";
import GenrePage from "../Pages/GenrePage/GenrePage";
import HomePage from "../Pages/HomePage/HomePage";
import VideoPage from "../Pages/VideoPage/VideoPage";
import PosterPage from "../Pages/PosterPage/PosterPage";
import VideoPlayer from "../components/VideoPlayer/VideoPlayer";
import GenreList from "../components/GenreBadge/genreList/GenreList";
import GenreBadge from "../components/GenreBadge/GenreBadge";
import GenreWrapper from "../components/GenreBadge/GenreWrapper";


export const router = createBrowserRouter([
    {
        path:'',
        element:<MainLayout/>,

        children:[
            {
                index: true,
                element:<MoviesPage/>
            },

            {path: 'list',
                element:<HomePage/>
            },

            {
                path: 'genres/:id',
                element:<GenrePage/>
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
                        path:"genres/:id",
                        element:<GenreList />},

                ]
            },
            {
                path: "*",
                element: <h1>404 Not Found</h1>,
            },


        ]
    }
])