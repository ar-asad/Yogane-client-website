import { Link, Navigate, useNavigate } from "react-router-dom";
import { FaLock, FaUserCircle, FaUnlockAlt } from "react-icons/fa";
import { BsDownload, BsEye, BsEyeSlash } from "react-icons/bs";
import { MdEmail } from "react-icons/md";


import SocialLogin from "../Login/SocialLogin/SocialLogin";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const SignUp = () => {
    const [error, setError] = useState(null);
    const [togglePassword, setTogglePassword] = useState(false)
    const [togglePasswordConfirm, setTogglePasswordConfirm] = useState(false)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);

    const navigate = useNavigate();

    const onSubmit = data => {

        createUser(data.email, data.password)
            .then(result => {
                console.log(result.user)

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email }
                        fetch('https://yogane-server-side-arasad1.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    toast.success('User Created Successfully');
                                    navigate('/');
                                }
                            })
                    })
                    .catch(error => setError(error.message))
            })
    };

    return (
        <div>
            <Helmet>
                <title>Yogane | Register</title>
            </Helmet>
            <div className="bg-red-200 flex py-20 ">
                <div className="flex-col flex ml-auto mr-auto items-center w-full lg:w-2/3 md:w-3/5 ">
                    <h1 className="font-bold text-2xl my-10 text-white"> Sign Up </h1>
                    <div className="border-inherit border-2 p-4 px-10 pt-8 lg:w-3/5 w-8/12">
                        <form onSubmit={handleSubmit(onSubmit)} className="mt-2 flex flex-col ">

                            {/* User Name */}
                            <div className="mb-6">
                                <div className="flex flex-wrap w-full  relative h-15 bg-white items-center rounded  pr-10">
                                    <div className="flex -mr-px justify-center w-15 p-4">
                                        <span
                                            className="flex items-center leading-normal w-11 bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600"
                                        >
                                            <FaUserCircle></FaUserCircle>
                                        </span>
                                    </div>
                                    <input
                                        type="text"
                                        name='name'
                                        {...register("name", { required: true })}
                                        className="flex-shrink flex-grow flex-1 leading-normal w-px  border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative  font-roboto text-xl outline-none"
                                        placeholder="UserName"
                                    />
                                </div>
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>

                            {/* User PhotoURL */}
                            <div className="mb-6">
                                <div className="flex flex-wrap w-full  relative h-15 bg-white items-center rounded pr-10">
                                    <div className="flex -mr-px justify-center w-15 p-4">
                                        <span
                                            className="flex items-center leading-normal w-11 bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600"
                                        >
                                            <BsDownload></BsDownload>
                                        </span>
                                    </div>
                                    <input
                                        type="text"
                                        {...register("photoURL", { required: true })}
                                        className="flex-shrink flex-grow flex-1 leading-normal w-px  border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative  font-roboto text-xl outline-none"
                                        placeholder="Profile Photo"
                                    />
                                </div>
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                            </div>

                            {/* User Email */}
                            <div className="mb-6">
                                <div className="flex flex-wrap w-full  relative h-15 bg-white items-center rounded pr-10">
                                    <div className="flex -mr-px justify-center w-15 p-4">
                                        <span
                                            className="flex items-center leading-normal w-11 bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600"
                                        >
                                            <MdEmail></MdEmail>
                                        </span>
                                    </div>
                                    <input
                                        type="email"
                                        {...register("email", { required: true })}
                                        className="flex-shrink flex-grow flex-1 leading-normal w-px  border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative  font-roboto text-xl outline-none"
                                        placeholder="Email"
                                    />
                                </div>
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>

                            {/* User Password */}
                            <div className="mb-6">
                                <div className="flex flex-wrap  w-full relative h-15 bg-white items-center rounded ">
                                    <div className="flex -mr-px justify-center w-15 p-4">
                                        <span
                                            className="flex items-center leading-normal w-11 bg-white rounded rounded-r-none text-xl px-3 whitespace-no-wrap text-gray-600"
                                        >
                                            <FaUnlockAlt></FaUnlockAlt>
                                        </span
                                        >
                                    </div>
                                    <input
                                        type={togglePassword ? "text" : "password"}
                                        {...register("password", {
                                            required: true,
                                            minLength: 6,
                                            maxLength: 12,
                                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                                        })}
                                        className="flex-shrink flex-grow  leading-normal w-px flex-1 border-0 h-10 px-3 relative self-center font-roboto text-xl outline-none"
                                        placeholder="Password"
                                    />
                                    <div onClick={() => setTogglePassword(!togglePassword)} className="flex mr-2">
                                        {
                                            togglePassword ? <BsEyeSlash className="text-2xl"></BsEyeSlash>
                                                :
                                                <BsEye className="text-2xl"></BsEye>
                                        }
                                    </div>
                                </div>

                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 12 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase, one special character.</p>}
                            </div>

                            {/* User ConfirmPassword */}
                            <div className="mb-4">
                                <div className="flex flex-wrap  w-full relative h-15 bg-white items-center rounded ">
                                    <div className="flex -mr-px justify-center w-15 p-4">
                                        <span
                                            className="flex items-center leading-normal w-11 bg-white rounded rounded-r-none text-xl px-3 whitespace-no-wrap text-gray-600"
                                        >
                                            <FaLock className="w-6"></FaLock>
                                        </span
                                        >
                                    </div>
                                    <input
                                        type={togglePasswordConfirm ? "text" : "password"}
                                        {...register("ConfirmPassword", {
                                            required: true
                                        })}
                                        className="flex-shrink flex-grow  leading-normal w-px flex-1 border-0 h-10 px-3 relative self-center font-roboto text-xl outline-none"
                                        placeholder="ConfirmPassword"
                                    />
                                    <div onClick={() => setTogglePasswordConfirm(!togglePasswordConfirm)} className="flex mr-2">
                                        {
                                            togglePasswordConfirm ? <BsEyeSlash className="text-2xl"></BsEyeSlash>
                                                :
                                                <BsEye className="text-2xl"></BsEye>
                                        }
                                    </div>
                                </div>
                                {errors.ConfirmPassword?.type === 'required' && <p className="text-red-600">ConfirmPassword is required</p>}
                                {error && <p className='text-red-500 font-semibold mt-2'>{error}</p>}
                            </div>
                            <div className="w-3/4 flex flex-row justify-between mb-4">
                                <div className=" flex items-center gap-x-1">
                                    <input type="checkbox" name="remember" id="" className=" w-4 h-4  "
                                    />
                                    <label className=" text-slate-400">Remember me</label>
                                </div>
                                {/* <div>
        <Link to="#" className=" text-slate-400 hover:text-red-500">Forget Password?</Link>
    </div> */}
                            </div>
                            <button
                                type="submit"
                                className="btn btn-error rounded px-6 mb-3 text-gray-100 bg-red-500"
                            >
                                Register
                            </button>
                            <p className='text-semibold '> Already have an account?
                                <Link
                                    className="text-sm ms-2 font-semibold hover:text-red-500 text-blue-600 underline "
                                    to='/login'
                                >
                                    Login
                                </Link>
                            </p>
                        </form>
                        <SocialLogin></SocialLogin>
                    </div>

                </div >
            </div >
        </div>
    );
};

export default SignUp;