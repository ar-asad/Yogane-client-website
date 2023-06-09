import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";


const MySelectedClass = () => {
    const { user } = useContext(AuthContext);
    const { refetch, data: mySelectclass = [], isLoading: loading, } = useQuery({
        queryKey: ['selectclass'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/selectclass?email=${user?.email}`);
            return res.json();
        }
    })
    console.log(mySelectclass);
    return (
        <div>
            <h2>amr sonar bangal</h2>
        </div>
    );
};

export default MySelectedClass;