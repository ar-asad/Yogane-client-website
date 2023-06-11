import { useState } from "react";


const useToggleMode = () => {
    const [darkMode, setDarkMode] = useState(false);

    const handleChangeMode = () => {
        setDarkMode(!darkMode)
    }
    return [darkMode, handleChangeMode]
};

export default useToggleMode;