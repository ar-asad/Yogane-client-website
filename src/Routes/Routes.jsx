import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Dashboard from "../Layout/Dashboard";
import Home from "../pages/Home/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import AllInstructors from "../pages/AllInstructors/AllInstructors";
import AllClasses from "../pages/Home/AllClasses";
import MySelectedClass from "../pages/Dashboard/MySelectedClass/MySelectedClass";
import MyEnrollClass from "../pages/Dashboard/MyEnrollClass/MyEnrollClass";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/instructor',
                element: <AllInstructors></AllInstructors>
            },
            {
                path: '/classes',
                element: <AllClasses></AllClasses>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'selectClass',
                element: <MySelectedClass></MySelectedClass>
            },
            {
                path: 'enrollClass',
                element: <MyEnrollClass></MyEnrollClass>
            }
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])