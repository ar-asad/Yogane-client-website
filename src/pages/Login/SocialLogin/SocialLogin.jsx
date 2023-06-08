import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
    return (
        <div className='flex justify-center'>
            <button className='bg-green-500 hover:bg-green-400 font-semibold text-gray-100 rounded px-8 py-2 flex justify-center gap-3 items-center'> <FcGoogle className='w-6 h-6'></FcGoogle> Sign In With Google</button>
        </div>
    );
};

export default SocialLogin;