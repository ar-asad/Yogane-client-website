import { Link } from "react-router-dom";
import { FaLock, FaUserCircle } from "react-icons/fa";
import SocialLogin from "./SocialLogin/SocialLogin";

const Login = () => {
    return (
        <div className="bg-red-200 flex py-20 ">
            <div className="flex-col flex ml-auto mr-auto items-center w-full lg:w-2/3 md:w-3/5 ">
                <h1 className="font-bold text-2xl my-10 text-white"> Login </h1>
                <form action="" className="mt-2 flex flex-col lg:w-1/2 w-8/12 border-inherit border-2 p-4 pt-8">
                    <div className="flex flex-wrap w-full  relative h-15 bg-white items-center rounded mb-6 pr-10">
                        <div className="flex -mr-px justify-center w-15 p-4">
                            <span
                                className="flex items-center leading-normal w-11 bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600"
                            >

                                <FaUserCircle></FaUserCircle>
                            </span>
                        </div>
                        <input
                            type="email"
                            className="flex-shrink flex-grow flex-1 leading-normal w-px  border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative  font-roboto text-xl outline-none"
                            required
                            placeholder="Email"
                        />
                    </div>
                    <div className="flex flex-wrap  w-full relative h-15 bg-white items-center rounded mb-4">
                        <div className="flex -mr-px justify-center w-15 p-4">
                            <span
                                className="flex items-center leading-normal w-11 bg-white rounded rounded-r-none text-xl px-3 whitespace-no-wrap text-gray-600"
                            >
                                <FaLock className="w-6"></FaLock>
                            </span
                            >
                        </div>
                        <input
                            type="password"
                            className="flex-shrink flex-grow  leading-normal w-px flex-1 border-0 h-10 px-3 relative self-center font-roboto text-xl outline-none"
                            required
                            placeholder="Password"
                        />
                        <div className="flex -mr-px">
                            <span
                                className="flex items-center leading-normal bg-white rounded rounded-l-none border-0 px-3 whitespace-no-wrap text-gray-600"
                            >
                                <i className="fas fa-eye-slash"></i>
                            </span>
                        </div>
                    </div>
                    <Link to="#" className="text-base text-white text-right font-roboto leading-normal hover:underline mb-6">Forget Password ?</Link>
                    <button
                        type="submit"
                        className="btn btn-error rounded px-6 mb-3 text-gray-100 bg-red-500"
                    >
                        Login In
                    </button>
                    <p className='text-semibold '> Don't have an account?
                        <Link
                            className="text-sm ms-2 font-semibold hover:text-red-500 text-blue-600 underline "
                            to='/signup'
                        >
                            Sign Up
                        </Link>
                    </p>
                    <SocialLogin></SocialLogin>
                </form>
            </div>
        </div>

    );
};

export default Login;