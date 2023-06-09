import { useContext, useEffect } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const MyEnrollClass = () => {
    const { user } = useContext(AuthContext);
    const { data: myEnrollclass = [] } = useQuery({
        queryKey: ['enrollclass'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/payment?email=${user?.email}`);
            return res.json();
        }
    })

    console.log(myEnrollclass);

    return (
        <div>
            <h3>amr sonar bangal</h3>
        </div>
    );
};

export default MyEnrollClass;