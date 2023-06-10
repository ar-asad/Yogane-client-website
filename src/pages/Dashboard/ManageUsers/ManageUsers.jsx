
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";


const ManageUsers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/users");
            return res.json();
        }
    })

    // click to user make admin
    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Make Admin successfully.',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });
    }

    // click to user make Instructor
    const handleMakeInstructor = id => {
        fetch(`http://localhost:5000/users/instructor/${id}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Make Instructor successfully.',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });
    }

    console.log(users)
    return (
        <div className="overflow-x-auto w-full p-10">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th>User Name </th>
                        <th>Class Email</th>
                        <th>Action</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => <tr key={user._id}>
                            <th>
                                {index + 1}
                            </th>
                            <td>{user?.name}</td>
                            <td>{user?.email}</td>
                            <th>
                                <button onClick={() => handleMakeAdmin(user?._id)} disabled={user?.role === 'admin'} className="btn btn-success btn-xs">Make Admin</button>
                            </th>
                            <th>
                                <button onClick={() => handleMakeInstructor(user._id)} disabled={user?.role === 'instructor'} className="btn btn-primary btn-xs">Make Instructor</button>
                            </th>
                        </tr>)
                    }
                </tbody>
            </table>

        </div>
    );
};

export default ManageUsers;