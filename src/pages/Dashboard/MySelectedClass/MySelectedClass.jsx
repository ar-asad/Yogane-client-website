import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import MySelectedClassCard from "../MySelectedClassCard/MySelectedClassCard";


const MySelectedClass = () => {
    const { user } = useContext(AuthContext);
    const { refetch, data: mySelectclass = [], isLoading: loading, } = useQuery({
        queryKey: ['selectclass'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/selectclass?email=${user?.email}`);
            return res.json();
        }
    })
    return (
        <div className="overflow-x-auto w-full p-10">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th>Class </th>
                        <th>Class Name</th>
                        <th>Class Price</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        mySelectclass.map((selectClass, index) => <MySelectedClassCard
                            key={selectClass._id}
                            index={index}
                            selectClass={selectClass}
                            refetch={refetch}
                        >
                        </MySelectedClassCard>)
                    }
                </tbody>
            </table>

        </div>
    );
};

export default MySelectedClass;