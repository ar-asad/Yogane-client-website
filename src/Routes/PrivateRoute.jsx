import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(user, loading)

    if (loading) {
        return <progress className="progress w-56 ms-36 mt-32"></progress>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;