import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";

const OurService = ({ service }) => {
    return (
        <div className="card ">
            <div className="avatar">
                <div className="w-24 mx-auto rounded-full ring ring-offset-red-400  ring-offset-2">
                    <img className="text-center" src={service.image} />
                </div>
            </div>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{service?.name}</h2>
                <p>{service?.description}</p>
                <div className="card-actions">
                    <Link to='/'><BsThreeDots className="text-xl hover:text-red-400"></BsThreeDots></Link>
                </div>
            </div>
        </div>
    );
};

export default OurService;