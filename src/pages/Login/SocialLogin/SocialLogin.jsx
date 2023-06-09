import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const logInUser = result.user;
                console.log(logInUser);
                const saveUser = {
                    name: logInUser.displayName,
                    email: logInUser.email
                }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
            .catch(error => console.log(error))
    }


    return (
        <div className="mt-4">
            <div className="divider text-gray-600 font-semibold mb-5">Or continue with</div>
            <div className='flex justify-around gap-3 my-4'>
                <button onClick={handleGoogleSignIn} className='bg-black btn-error font-semibold text-gray-100 rounded px-8 py-2 flex justify-center gap-3 items-center'> <FcGoogle className='w-6 h-6'></FcGoogle>Google</button>
                <button className='bg-black btn-error font-semibold text-gray-100 rounded px-8 py-2 flex justify-center gap-3 items-center'> <FaGithub className='w-6 h-6'></FaGithub>GitHub</button>
            </div>
        </div>
    );
};

export default SocialLogin;