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
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import ManageClass from "../pages/Dashboard/ManageClass/ManageClass";
import MyClasses from "../pages/Dashboard/MyClasses/MyClasses";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import PrivateRoute from "./PrivateRoute";


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
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            // normal user dashboard route
            {
                path: 'selectClass',
                element: <MySelectedClass></MySelectedClass>
            },
            {
                path: 'enrollClass',
                element: <MyEnrollClass></MyEnrollClass>
            },

            // Only Instructor dashboard route
            {
                path: 'addClass',
                element: <AddClass></AddClass>
            },
            {
                path: 'myClass',
                element: <MyClasses></MyClasses>
            },

            // Only admin dashboard route
            {
                path: 'manageClass',
                element: <ManageClass></ManageClass>
            },
            {
                path: 'manageUser',
                element: <ManageUsers></ManageUsers>
            }
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])