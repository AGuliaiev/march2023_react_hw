import {createBrowserRouter} from "react-router-dom";

import {AppRoutes} from "./AppRoutes";
import TodosPage from "../pages/TodosPage/TodosPage";
import MainLayout from "../layouts/MainLayout/MainLayout";
import AlbumsPage from "../pages/AlbomsPage/AlbumsPage";
import CommentsPage from "../pages/CommentsPage/CommentsPage";
import PostsPage from "../pages/PostsPage/PostsPage";






export const router = createBrowserRouter([
    {
        path:AppRoutes.MAIN,
        element:<MainLayout/>,
        children:[
            {
                path:AppRoutes.TODOS,
                element:<TodosPage/>
            },
            {
                path:AppRoutes.ALBUMS,
                element:<AlbumsPage/>
            },
            {
                path:AppRoutes.COMMENTS,
                element:<CommentsPage/>,
                children:[
                    {
                        path:AppRoutes.POST_ID,
                        element:<PostsPage/>
                    }
                ]
            }

        ]
    },
    {
        path:AppRoutes.NOT_FOUND,
        element:<NotFoundPage/>
    }
]);