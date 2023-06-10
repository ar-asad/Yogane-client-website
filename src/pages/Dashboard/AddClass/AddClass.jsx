import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const AddClass = () => {
    const { user } = useContext(AuthContext);


    const handleAddClass = event => {
        event.preventDefault();
        const form = event.target;
        const className = (form.classname.value);
        const classImage = form.classphoto.value;
        const instructorImage = form.instructorphoto.value;
        const instructorName = form.instructorname.value;
        const instructorEmail = form.email.value;
        const price = parseInt(form.price.value);
        const availableSeats = parseInt(form.seats.value);
        const studentNumber = parseInt(0);

        const addCar = {
            className,
            classImage,
            instructorName,
            instructorImage,
            instructorEmail,
            availableSeats,
            studentNumber,
            price,
            status: 'pending'
        }
        console.log(addCar)
        fetch('http://localhost:5000/classes ', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addCar)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                form.reset();
                if (data.insertedId) {
                    // refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'This class added Successfully.',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                else {
                    // toast.error(data.message)
                }

            })
    }

    return (
        <div className='flex justify-center my-12'>
            <div className="card lg:w-2/3 p-4 w-full border-2 border-inherit  ">
                <div>
                    <h3 className="text-4xl font-medium text-center mt-4 mb-10 text-gray-700">
                        Add A Class
                    </h3>
                </div>
                <form onSubmit={handleAddClass} >
                    <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-x-8 gap-y-3 items-center'>
                        <div>
                            <label
                                htmlFor="classname"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Class Name
                            </label>
                            <div className="flex flex-col items-start">
                                <input type="text" name='classname' className="mt-1 block w-full px-3 py-2 bg-slate-100 border border-slate-300 rounded text-sm shadow-sm focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 " required />
                            </div>
                        </div>
                        <div className="">
                            <label
                                htmlFor="classphoto"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Class Photo
                            </label>
                            <div className="flex flex-col items-start">
                                <input type="text" name='classphoto' className="mt-1 block w-full px-3 py-2 bg-slate-100 border border-slate-300 rounded text-sm shadow-sm focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 " required />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="instructorname"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Instructor Name
                            </label>
                            <div className="flex flex-col items-start">
                                <input type="text" readOnly defaultValue={user?.displayName} name='instructorname' className="mt-1 block w-full px-3 py-2 bg-slate-100 border border-slate-300 rounded text-sm shadow-sm focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 " required />
                            </div>
                        </div>
                        <div className="">
                            <label
                                htmlFor="classphoto"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Instructor Photo
                            </label>
                            <div className="flex flex-col items-start">
                                <input type="text" readOnly defaultValue={user?.photoURL} name='instructorphoto' className="mt-1 block w-full px-3 py-2 bg-slate-100 border border-slate-300 rounded text-sm shadow-sm focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 " required />
                            </div>
                        </div>
                        <div className="">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Instructor Email
                            </label>
                            <div className="flex flex-col items-start">
                                <input type="email" readOnly defaultValue={user?.email} name='email' className="mt-1 block w-full px-3 py-2 bg-slate-100 border border-slate-300 rounded text-sm shadow-sm focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 " required />
                            </div>
                        </div>

                        <div className="">
                            <label
                                htmlFor="price"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Class Price
                            </label>
                            <div className="flex flex-col items-start">
                                <input type="number" name='price' className="mt-1 block w-full px-3 py-2 bg-slate-100 border border-slate-300 rounded text-sm shadow-sm focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 " required />
                            </div>
                        </div>
                        <div className="">
                            <label
                                htmlFor="seats"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Abailable seats
                            </label>
                            <div className="flex flex-col items-start">
                                <input type="number" name='seats' className="mt-1 block w-full px-3 py-2 bg-slate-100 border border-slate-300 rounded text-sm shadow-sm focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 " required />
                            </div>
                        </div>
                    </div>

                    <div className=" text-center mt-10">
                        <button
                            type="submit"
                            className="btn btn-error rounded px-6 mb-3 text-gray-100 bg-red-500"
                        >
                            Add Class
                        </button>
                    </div>

                </form>
            </div >

        </div>
    );
};

export default AddClass;