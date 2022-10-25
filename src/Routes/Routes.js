import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import Cources from "../Pages/Cources/Cources";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Signin from "../Pages/Login/Sign In/Signin";
import Contact from "../Pages/Others/Contact/Contact";
import ErrorPage from "../Pages/Others/ErrorPage/ErrorPage";
import FAQ from "../Pages/Others/FAQ/FAQ";


export const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/cources',
                element: <Cources></Cources>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signin',
                element: <Signin></Signin>
            }
        ]
    }

])