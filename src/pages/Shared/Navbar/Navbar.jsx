import { Link } from "react-router-dom";
import logo from '../../../assets/home/logo.png';
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useContext } from "react";

const Navbar = ({ handleChangeMode, darkMode }) => {
    const { user, logOut } = useContext(AuthContext)

    // custom font-family use
    const style = {
        fontFamily: 'Playfair Display, serif'
    };
    // custom color use
    const logoColor = {
        filter: 'brightness(0) saturate(100%) invert(17%) sepia(84%) saturate(4728%) hue-rotate(354deg) brightness(92%) contrast(92%)'
    };

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    // user logout
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const menuItem = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/instructor'>Instructors</Link></li>
        <li><Link to='/classes'>Classes</Link></li>
        {
            isAdmin?.admin ? <li><Link to="/dashboard/manageUser">Dashboard</Link></li>
                :
                isInstructor?.instructor ? <li> <Link to="/dashboard/myClass">Dashboard</Link></ li>
                    :
                    user ? <li><Link to="/dashboard/selectClass">Dashboard</Link></li>
                        :
                        <></>
        }

        {
            user ?
                <>
                    <li> <button className="btn btn-ghost" onClick={handleLogOut}>Log Out</button></li>
                </>
                :

                <li><Link to='/login'>Login</Link></li>
        }
    </>


    return (
        <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl w-full text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100  rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <a style={style} className="btn btn-ghost normal-case text-xl font-plafair">
                    <img style={logoColor} src={logo} className="text  w-10 " alt="" />
                    <span className="text-red-500 ms-0">Yog</span>ane</a>
            </div>
            <div className="navbar-center font-semibold hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItem}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn border-none mr-2" onClick={handleChangeMode}>{darkMode ? <MdLightMode className="text-black text-3xl"></MdLightMode> : <MdDarkMode className="text-black text-3xl "></MdDarkMode>} </button>
                {
                    user &&
                    <div title={user?.displayName} className="avatar mr-4">
                        <div className="w-12 h-12 rounded-full">
                            <img src={user?.photoURL} alt='userphoto' />
                        </div>
                    </div>
                }

            </div>
        </div >
    );
};

export default Navbar;