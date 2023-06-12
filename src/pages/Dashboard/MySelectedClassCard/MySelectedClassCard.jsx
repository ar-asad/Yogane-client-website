import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MySelectedClassCard = ({ selectClass, index, refetch }) => {
    const { classImage, className, price } = selectClass;

    // Deleting my added a classes....
    const handleDeleteClass = selectClass => {
        Swal.fire({
            title: 'Are you sure?',
            text: `If you delete ${selectClass?.className}. It cannot be undone.`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://yogane-server-side-arasad1.vercel.app/selectclass/${selectClass?._id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(res => {
                        console.log(res.deletedCount)
                        if (res.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your selected class has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }

    return (
        <tr>
            <th>
                {index + 1}
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-14 h-14">
                            <img src={classImage} alt="yogaclass" />
                        </div>
                    </div>
                </div>
            </td>
            <td>{className}</td>
            <td>${price}</td>
            <th>
                <button onClick={() => handleDeleteClass(selectClass)} className="btn btn-sm btn-success">Delete</button>
            </th>
            <th>
                <Link to={`/dashboard/payment/${selectClass._id}`}>
                    <button className="btn btn-sm btn-success">Pay</button>
                </Link>
            </th>
        </tr>
    );
};

export default MySelectedClassCard;