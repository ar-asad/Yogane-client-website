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
import Payment from "../pages/Dashboard/Payment/Payment";
import AdminRoute from "./AdminRoute";
import Instructors from "../pages/Home/Instructors/Instructors";
import InstructorRoutes from "./InstructorRoutes";
import MyPayment from "../pages/Dashboard/MyPayment/MyPayment";


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
            {
                path: 'paymenthistory',
                element: <MyPayment></MyPayment>
            },
            {
                path: 'payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`http://localhost:5000/selectclass/${params.id}`)
            },

            // Only Instructor dashboard route
            {
                path: 'addClass',
                element: <InstructorRoutes><AddClass></AddClass></InstructorRoutes>
            },
            {
                path: 'myClass',
                element: <InstructorRoutes><MyClasses></MyClasses></InstructorRoutes>
            },

            // Only admin dashboard route
            {
                path: 'manageClass',
                element: <AdminRoute><ManageClass></ManageClass></AdminRoute>
            },
            {
                path: 'manageUser',
                element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            }
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])