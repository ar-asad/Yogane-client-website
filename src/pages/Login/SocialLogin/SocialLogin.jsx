import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div className="mt-4">
            <div className="divider text-gray-600 font-semibold mb-5">Or continue with</div>
            <div className='flex justify-around gap-3 my-4'>
                <button className='bg-black btn-error font-semibold text-gray-100 rounded px-8 py-2 flex justify-center gap-3 items-center'> <FcGoogle className='w-6 h-6'></FcGoogle>Google</button>
                <button className='bg-black btn-error font-semibold text-gray-100 rounded px-8 py-2 flex justify-center gap-3 items-center'> <FaGithub className='w-6 h-6'></FaGithub>GitHub</button>
            </div>
        </div>
    );
};

export default SocialLogin;