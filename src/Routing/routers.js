import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";



import MoviesPage from "../MoviesPage/MoviesPage";

export const router = createBrowserRouter([
    {
        path:'',
        element:<MainLayout/>,

        children:[
            {path: 'lists',
                element:<MoviesPage/>
            },


        ]
    }
])