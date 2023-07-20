import {createBrowserRouter, Outlet} from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import {AppRoutes} from "./AppRoutes";
import Albums from "../components/Alboms/Albums";


const AppLayout = () => (
    <>
        <Navbar/>
        <Outlet/>
    </>
)

export const router = createBrowserRouter([
    {
        element: <AppLayout/>,
        children: [
            {
                path: AppRoutes.MAIN,
                element: <Albums/>
            }
        ]
    },
]);