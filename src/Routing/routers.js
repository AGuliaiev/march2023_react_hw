import {createBrowserRouter, Navigate} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";



import MoviesPage from "../MoviesPage/MoviesPage";

import MoviesListCard from "../components/MoviesListCards/MoviesListCard/MoviesListCard";
import GenrePage from "../Pages/GenrePage/GenrePage";

export const router = createBrowserRouter([
    {
        path:'',
        element:<MainLayout/>,

        children:[

            {path: 'lists',
                element:<MoviesPage/>
            },
            {
                path: 'genres',
                element:<GenrePage/>
            },
            {
                path: 'lists/:id',
                element:<MoviesListCard/>
            }


        ]
    }
])