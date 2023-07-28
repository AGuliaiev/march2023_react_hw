import {createBrowserRouter, Navigate} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";



import MoviesPage from "../MoviesPage/MoviesPage";

import MoviesListCard from "../components/MoviesListCards/MoviesListCard/MoviesListCard";
import GenrePage from "../Pages/GenrePage/GenrePage";
import HomePage from "../Pages/HomePage/HomePage";

export const router = createBrowserRouter([
    {
        path:'',
        element:<MainLayout/>,

        children:[
            {
                index: true,
                element:<MoviesPage/>
            },

            {path: 'lists',
                element:<HomePage/>
            },
            {
                path: 'genres/:id',
                element:<GenrePage/>
            },
            {
                path: 'lists/:id',
                element:<MoviesListCard/>
            }


        ]
    }
])