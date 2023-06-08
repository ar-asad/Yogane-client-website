import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import SocialLogin from "./SocialLogin/SocialLogin";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { useContext, useState } from "react";

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const [error, setError] = useState(null);

    let location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let navigate = useNavigate();

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        // signIn(email, password)
        //     .then(result => {
        //         console.log(result.user);
        //         navigate(from, { replace: true });
        //         form.reset();
        //     })
        //     .catch(e => {
        //         setError(e.message)
        //     })
    }

    return (
        <div className="bg-red-200 flex py-20  ">
            <div className="flex-col flex ml-auto mr-auto items-center w-full lg:w-2/3 md:w-3/5 ">
                <h1 className="font-bold text-2xl my-10 text-white"> Login </h1>
                <form onSubmit={handleLogin} className="mt-2 flex flex-col lg:w-3/5 w-8/12 border-inherit border-2 p-4 px-8 pt-8">
                    <div className="flex flex-wrap w-full  relative h-15 bg-white items-center rounded mb-6 pr-10">
                        <div className="flex -mr-px justify-center w-15 p-4">
                            <span
                                className="flex items-center leading-normal w-11 bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600"
                            >
                                <MdEmail></MdEmail>
                            </span>
                        </div>
                        <input
                            type="email"
                            name='email'
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
                            name='password'
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
                    {error && <p className='text-red-500 font-semibold mt-2'>{error}</p>}
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
                        Login In
                    </button>
                    <p className='text-semibold '> Dont have an account?
                        <Link
                            className="text-sm ms-2 font-semibold hover:text-red-500 text-blue-600 underline "
                            to='/signup'
                        >
                            Sign Up
                        </Link>
                    </p>
                    <SocialLogin></SocialLogin>
                </form>
            </div >
        </div >

    );
};

export default Login;