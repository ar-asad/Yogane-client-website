import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import { FaUsers } from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";
import { BiBookContent } from "react-icons/bi";
import { TfiWrite } from "react-icons/tfi";
import { BsBookmarkCheckFill, BsFillCartFill } from "react-icons/bs";
import { GiWallet } from "react-icons/gi";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {

    const [isAdmin, isAdminLoading] = useAdmin();
    const [isInstructor, isInstructorLoading] = useInstructor();
    if (isAdminLoading || isInstructorLoading) {
        return <progress className="progress w-56 ms-36 mt-32"></progress>
    }
    return (
        <div>
            <Helmet>
                <title>Yogane | Dashboard</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side  bg-slate-800 text-white">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu  py-4 ps-2 w-60 pt-24">

                        {
                            isAdmin ? <>
                                <li className="mb-3 text-lg"><NavLink to="/dashboard/manageUser"><FaUsers className="text-red-500 w-6 h-6 "></FaUsers> Mangage Users</NavLink></li>
                                <li className="mb-3 text-lg"><NavLink to="/dashboard/manageClass"><AiOutlineBars className="text-red-500 w-6 h-6 "></AiOutlineBars> Manage Classes</NavLink></li>
                            </> :
                                isInstructor ? <>
                                    <li className="mb-3 text-lg"><NavLink to="/dashboard/myClass"><BiBookContent className="text-red-500 w-6 h-6 "></BiBookContent> My Classes</NavLink></li>
                                    <li className="mb-3 text-lg"><NavLink to="/dashboard/addClass"><TfiWrite className="text-red-500 w-6 h-6 "></TfiWrite> Add a Class</NavLink></li>
                                </>
                                    :
                                    <>
                                        <li className="mb-3 text-lg"><NavLink to="/dashboard/selectClass"><BsFillCartFill className="text-red-500 w-6 h-6 "></BsFillCartFill> My Selected Classes</NavLink></li>
                                        <li className="mb-3 text-lg"><NavLink to="/dashboard/enrollClass"><BsBookmarkCheckFill className="text-red-500 w-6 h-6 "></BsBookmarkCheckFill> My Enrolled Classes</NavLink></li>
                                        <li className="mb-3 text-lg"><NavLink to="/dashboard/paymenthistory"><GiWallet className="text-red-500 w-6 h-6 "></GiWallet> My Payment History</NavLink></li>
                                    </>
                        }
                    </ul>
                </div>
            </div>


        </div>
    );
};

export default Dashboard;

