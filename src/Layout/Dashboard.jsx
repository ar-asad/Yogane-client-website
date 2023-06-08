import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80">

                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/adminhome">Mangage Classes</NavLink></li>
                            <li><NavLink to="/dashboard/addItem"> Manage Users</NavLink></li>
                        </> :
                            isInstructors ? <>
                                <li><NavLink to="/dashboard/adminhome">My Classes</NavLink></li>
                                <li><NavLink to="/dashboard/addItem">Add a Class</NavLink></li>
                            </>
                                :
                                <>
                                    <li><NavLink to="/dashboard/userhome">My Selected Classes</NavLink></li>
                                    <li><NavLink to="/">My Enrolled Classes</NavLink></li>
                                </>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;