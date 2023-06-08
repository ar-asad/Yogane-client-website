import { Link } from "react-router-dom";
import logo from '../../../assets/home/logo.png';

const Navbar = () => {
    // custom font-family use
    const style = {
        fontFamily: 'Playfair Display, serif'
    };
    const logoColor = {
        filter: 'brightness(0) saturate(100%) invert(17%) sepia(84%) saturate(4728%) hue-rotate(354deg) brightness(92%) contrast(92%)'
    };

    const menuItem = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>Instructors</Link></li>
        <li><Link to='/appointment'>Classes</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/signup'>SignUp</Link></li>
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
                {
                    user ?
                        <div className='flex items-center'>
                            <li className='font-semibold '>
                                <div title={user?.displayName} className="avatar">
                                    <div className="w-16 h-16 rounded-full">
                                        <LazyLoad>
                                            <img src={user?.photoURL} alt='' />
                                        </LazyLoad>
                                    </div>
                                </div>
                            </li>
                            <button className="btn btn-ghost lg:text-lg" onClick={handleLogOut}>Log out</button>
                        </div>
                        :
                        <li><Link to='/login'>Login</Link></li>
                }
            </div>
        </div>
    );
};

export default Navbar;