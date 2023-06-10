import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useSelectClass = () => {
    const { user } = useContext(AuthContext);
    const { refetch, data: mySelectclass = [], isLoading: loading, } = useQuery({
        queryKey: ['selectclass'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/selectclass?email=${user?.email}`);
            return res.json();
        }
    })
    return [mySelectclass, loading, refetch]
};

export default useSelectClass;