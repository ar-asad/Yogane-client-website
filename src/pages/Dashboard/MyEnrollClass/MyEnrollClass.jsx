import { useContext, useEffect } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useSelectClass from "../../../hooks/useSelectClass";

const MyEnrollClass = () => {
    const [mySelectclass] = useSelectClass();

    const PaidClasses = mySelectclass.filter(classes => classes.paid === true)



    return (
        <div className="overflow-x-auto w-full p-10">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th>Class </th>
                        <th>Class Name</th>
                        <th>Instructor</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        PaidClasses.map((classes, index) => <tr key={classes._id}>
                            <th>
                                {index + 1}
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-14 h-14">
                                            <img src={classes.classImage} alt="yogaclass" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>{classes.className}</td>
                            <td>{classes.instructorName}</td>
                        </tr>)
                    }
                </tbody>
            </table>

        </div>
    );
};

export default MyEnrollClass;