
import { useQuery } from "@tanstack/react-query";


const ManageUsers = () => {
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/users");
            return res.json();
        }
    })

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
                                <button disabled={user?.role === 'admin'} className="btn btn-success btn-xs">Make Admin</button>
                            </th>
                            <th>
                                <button disabled={user?.role === 'instructor'} className="btn btn-primary btn-xs">Make Instructor</button>
                            </th>
                        </tr>)
                    }
                </tbody>
            </table>

        </div>
    );
};

export default ManageUsers;