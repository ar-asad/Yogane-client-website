import Swal from "sweetalert2";
import useClasses from "../../../hooks/useClasses";


const ManageClass = () => {
    const [classes, refetch] = useClasses();

    const sortedClasses = classes?.sort((a, b) => (a._id > b._id ? -1 : 1))

    const handleApprove = (id) => {
        fetch(`http://localhost:5000/users/approve/${id}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Class Approved successfully.',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });
    }

    const handleDeny = (id) => {

    }

    const handleFeedback = () => {

    }

    return (
        <div className="overflow-x-auto w-full p-10 ps-2">
            <table className="table w-full">
                <thead>
                    <tr>

                        <th>Class </th>
                        <th>Class Name</th>
                        <th>Instructor Name</th>
                        <th>Instructor email</th>
                        <th>Available Seats</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Action</th>
                        <th>Action</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        sortedClasses.map((clas, index) => <tr key={clas._id}>
                            {/* <th>
                                {index + 1}
                            </th> */}
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-14 h-14">
                                            <img src={clas?.classImage} alt="yogaclass" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>{clas?.className}</td>
                            <td>{clas?.instructorName}</td>
                            <td>{clas?.instructorEmail}</td>
                            <td>{clas?.availableSeats}</td>
                            <td>{clas?.price}</td>
                            {/* <td {clas?.status === 'aproved' ? className = "text-red-400 font-semibold" : className = "text-green-400 font-semibold"}>{clas?.status}</td> */}
                            <td className={clas?.status === "pending" ? "text-red-400 font-semibold" : "text-green-500 font-semibold"}>{clas?.status}</td>
                            <th>
                                <button onClick={() => handleApprove(clas?._id)}
                                    disabled={clas?.status === 'aproved'} className="btn btn-info btn-xs">Approve</button>
                            </th>
                            <th>
                                <button onClick={() => handleDeny(clas._id)}
                                    disabled={clas?.status === 'aproved'} className="btn btn-error btn-xs">Deny</button>
                            </th>
                            <th>
                                <button onClick={() => handleFeedback(clas._id)} className="btn btn-primary btn-xs">FeedBack</button>
                            </th>
                        </tr>)
                    }
                </tbody>
            </table>

        </div>
    );
};

export default ManageClass;