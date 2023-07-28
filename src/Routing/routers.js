import {createBrowserRouter, Navigate} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";



import MoviesPage from "../MoviesPage/MoviesPage";

import MoviesListCard from "../components/MoviesListCards/MoviesListCard/MoviesListCard";
import GenrePage from "../Pages/GenrePage/GenrePage";
import HomePage from "../Pages/HomePage/HomePage";
import VideoPage from "../Pages/VideoPage/VideoPage";
import PosterPage from "../Pages/PosterPage/PosterPage";


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
                path: 'video',
                element:<VideoPage/>
            },
            {
                path: 'poster',
                element: <PosterPage/>
            }


        ]
    }
])