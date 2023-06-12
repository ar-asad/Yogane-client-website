import { Link } from "react-router-dom";
import animation from '../../assets/animation/animation.mp4';
import { Helmet } from "react-helmet-async";

const NotFound = () => {
    return (

        <div>
            <Helmet>
                <title>Yogane | NotFound</title>
            </Helmet>
            <div className='text-center py-6 '>
                <Link to='/'>
                    <button className="btn btn-error hover:bg-red-500 rounded text-gray-200 "> Back to Home</button>
                </Link>
            </div>
            <div className='flex justify-center ' >
                <video controls className="max-w-fit max-h-fit">
                    <source src={animation} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

            </div>
        </div>
    );
};

export default NotFound;