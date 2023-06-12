import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const MyClasses = () => {
    const { user } = useContext(AuthContext);
    const { data: myClasses = [] } = useQuery({
        queryKey: ['myClasses'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/classes?email=${user?.email}`);
            return res.json();
        }
    })
    console.log(myClasses)

    return (
        <div className="overflow-x-auto w-full p-10 mt-16">
            <table className="table w-full">
                <thead className="bg-gray-200">
                    <tr>
                        <th>
                        </th>
                        <th>Class </th>
                        <th>Class Name</th>
                        <th>Total Enroll Students</th>
                        <th>Status</th>
                        <th>Feedback</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myClasses.map((classes, index) => <tr key={classes._id}>
                            <th>
                                {index + 1}
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-14 h-14">
                                            <img src={classes?.classImage} alt="yogaclass" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>{classes?.className}</td>
                            <td>{classes?.studentNumber}</td>
                            <td className="text-red-400 font-semibold">{classes?.status}</td>
                            <td>{classes?.feedback}</td>
                        </tr>)
                    }
                </tbody>
            </table>

        </div>
    );
};

export default MyClasses;