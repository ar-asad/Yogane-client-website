
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxios from "../../../hooks/useAxios";

// const [axiosSecure] = useAxiosSecure();
// const { data: users = [], refetch } = useQuery(['users'], async () => {
//     const res = await axiosSecure.get('/users')
//     return res.data;
// })
const ManageUsers = () => {
    const [axiosSecure] = useAxios();
    const { data: users = [], refetch, isLoading: loading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get("/users");
            return res.data;
        }
    })

    // click to user make admin
    const handleMakeAdmin = id => {
        fetch(`https://yogane-server-side-arasad1.vercel.app/users/admin/${id}`, {
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
        fetch(`https://yogane-server-side-arasad1.vercel.app/users/instructor/${id}`, {
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

    if (loading) {
        return <progress className="progress w-56 ms-36 mt-32"></progress>
    }

    return (
        <div className="overflow-x-auto w-full p-10 mt-16">
            <table className="table w-full">
                <thead className="bg-gray-200">
                    <tr>
                        <th>
                        </th>
                        <th>User Name </th>
                        <th>Class Email</th>
                        <th>role</th>
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
                            <td>{user?.role}</td>
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