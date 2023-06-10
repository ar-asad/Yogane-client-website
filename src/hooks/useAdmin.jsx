import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useAdmin = () => {
    const { user } = useContext(AuthContext)
    // const [axiosSecure] = useAxiosSecure();
    // use axios secure with react query
    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/admin/${user?.email}`);
            return res.json();
        }
        // queryFn: async () => {
        //     const res = await axiosSecure.get(``);
        //     return res.data.admin;
        // }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;