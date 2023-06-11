import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";
import useToggleMode from "../hooks/useToggleMode";

const Main = () => {
    const [darkMode, handleChangeMode] = useToggleMode();
    return (
        <div className={darkMode ? 'bg-black' : 'bg-light'}>
            <Navbar handleChangeMode={handleChangeMode} darkMode={darkMode}></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;