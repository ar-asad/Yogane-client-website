import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";


const useInstructor = () => {
    const { user, loading } = useContext(AuthContext)
    const [axiosSecure] = useAxios();
    // use axios secure with react query
    const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
            return res.data.instructor;
        }
    })
    return [isInstructor, isInstructorLoading]
};

export default useInstructor;