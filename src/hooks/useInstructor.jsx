import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useInstructor = () => {
    const { user } = useContext(AuthContext)
    // const [axiosSecure] = useAxiosSecure();
    // use axios secure with react query
    const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
        queryKey: ['isInstructor', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/instructor/${user?.email}`);
            return res.json();
        }
        // queryFn: async () => {
        //     const res = await axiosSecure.get(``);
        //     return res.data.admin;
        // }
    })
    return [isInstructor, isInstructorLoading]
};

export default useInstructor;