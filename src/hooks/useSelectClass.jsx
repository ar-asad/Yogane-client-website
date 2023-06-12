import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";


const useSelectClass = () => {
    const [axiosSecure] = useAxios();
    const { user } = useContext(AuthContext);
    const { refetch, data: mySelectclass = [], isLoading: loading, } = useQuery({
        queryKey: ['selectclass'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/selectclass?email=${user?.email}`);
            return res.data;
        }
    })
    return [mySelectclass, refetch, loading]
};

export default useSelectClass;