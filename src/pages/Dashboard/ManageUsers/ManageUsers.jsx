import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const ManageUsers = () => {
    const { user } = useContext(AuthContext);
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/users");
            return res.json();
        }
    })

    console.log(users)
    return (
        <div>
            <h2>manage all users</h2>
        </div>
    );
};

export default ManageUsers;