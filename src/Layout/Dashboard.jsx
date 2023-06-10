import { Link, NavLink, Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const Dashboard = () => {

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    console.log(isInstructor)
    console.log(isAdmin)

    return (
        <div>
            <div className="drawer lg:drawer-open ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side bg-black text-white">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 pt-10">

                        {
                            isAdmin?.admin ? <>
                                <li className="mb-3 text-lg"><Link to="/dashboard/manageUser">Mangage Users</Link></li>
                                <li className="mb-3 text-lg"><Link to="/dashboard/manageClass"> Manage Classes</Link></li>
                            </> :
                                isInstructor?.instructor ? <>
                                    <li className="mb-3 text-lg"><Link to="/dashboard/myClass">My Classes</Link></li>
                                    <li className="mb-3 text-lg"><Link to="/dashboard/addClass">Add a Class</Link></li>
                                </>
                                    :
                                    <>
                                        <li className="mb-3 text-lg"><Link to="/dashboard/selectClass">My Selected Classes</Link></li>
                                        <li className="mb-3 text-lg"><Link to="/dashboard/enrollClass">My Enrolled Classes</Link></li>
                                        <li className="mb-3 text-lg"><Link to="/dashboard/paymenthistory">My Payment History</Link></li>
                                    </>
                        }
                    </ul>
                </div>
            </div>


        </div>
    );
};

export default Dashboard;

