import { Link, NavLink, Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {

    const [isAdmin] = useAdmin();
    const isInstructor = '';

    return (
        <div>
            <div className="drawer lg:drawer-open ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side bg-red-300">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 pt-10">

                        {
                            isAdmin ? <>
                                <li className="mb-3 text-lg"><Link to="/dashboard/manageClass"> Manage Users</Link></li>
                                <li className="mb-3 text-lg"><Link to="/dashboard/manageUser">Mangage Classes</Link></li>
                            </> :
                                isInstructor ? <>
                                    <li className="mb-3 text-lg"><Link to="/dashboard/myClass">My Classes</Link></li>
                                    <li className="mb-3 text-lg"><Link to="/dashboard/addClass">Add a Class</Link></li>
                                </>
                                    :
                                    <>
                                        <li className="mb-3 text-lg"><Link to="/dashboard/selectClass">My Selected Classes</Link></li>
                                        <li className="mb-3 text-lg"><Link to="/dashboard/enrollClass">My Enrolled Classes</Link></li>
                                    </>
                        }
                    </ul>
                </div>
            </div>


        </div>
    );
};

export default Dashboard;

