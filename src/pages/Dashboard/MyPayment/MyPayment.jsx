import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const MyPayment = () => {
    const { user } = useContext(AuthContext)
    const { data: myPayments = [] } = useQuery({
        queryKey: ['myPayments'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/payment?email=${user?.email}`);
            return res.json();
        }
    })
    console.log(myPayments)
    return (
        <div className="overflow-x-auto w-full p-10">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th>Class Name </th>
                        <th>Instructor Name</th>
                        <th>Price</th>
                        <th>transactionId</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myPayments.map((payment, index) => <tr key={payment._id}>
                            <th>
                                {index + 1}
                            </th>
                            <td>{payment?.className}</td>
                            <td>{payment?.instructorName}</td>
                            <td>{payment?.price}</td>
                            <td>{payment?.transactionId}</td>
                            <td>{payment?.date}</td>
                        </tr>)
                    }
                </tbody>
            </table>

        </div>
    );
};

export default MyPayment;