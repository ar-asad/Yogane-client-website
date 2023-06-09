import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useClasses from "../../../hooks/useClasses";

const PopularClassCard = ({ classInfo, onlyClasses, allClasses }) => {
    const { user } = useContext(AuthContext)
    const [refetch] = useClasses();
    const { classImage, className, instructorImage, instructorName, instructorEmail, studentNumber, availableSeats, _id, price } = classInfo;

    const navigate = useNavigate();
    const location = useLocation();

    // custom font-family use
    const style = {
        fontFamily: 'Playfair Display, serif'
    };

    const handleSelect = classInfo => {
        console.log(classInfo);
        if (user && user?.email) {
            const selectClass = { classId: _id, className, classImage, price, email: user?.email }
            console.log(selectClass);
            fetch('http://localhost:5000/selectclass', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectClass)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'This class booked successfully.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login first before selecting the class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }

    }

    return (
        <div className={onlyClasses ? "card bg-base-100 shadow-xl" : "card bg-base-100 shadow-xl rounded-none"}>
            {
                onlyClasses ? <figure><img src={classImage} alt="Yoga" /></figure>
                    :
                    <figure><img src={instructorImage} alt="Yoga" /></figure>
            }
            {
                onlyClasses && <div >
                    <div className="absolute left-4 top-48">
                        <div className="avatar ">
                            <div className="w-12 rounded-full">
                                <img src={instructorImage} />
                            </div>
                        </div>
                        <p className="text-red-500">{instructorName}</p>
                    </div>
                    <div className="card-body mt-8 px-2">
                        <div className="flex justify-between">
                            <h2 className="card-title">{className}-Yoga</h2>
                            {allClasses && <h3 style={style} className="text-center font-semibold text-4xl text-red-500 mr-6 underline">${studentNumber}</h3>}
                        </div>
                        {onlyClasses && <p>Student Number : {studentNumber}</p>}
                        {allClasses && <>
                            <p>Available Seat : {availableSeats}</p>
                            <div className="card-actions justify-start">
                                <button onClick={() => handleSelect(classInfo)} disabled={availableSeats === 0 || user?.role === 'admin' || user?.role === 'instructor'} className="btn btn-error rounded-sm  lg:px-6 text-white mr-4 mt-2">Select Now</button>
                            </div>
                        </>}
                    </div>
                </div>
            }
            {
                onlyClasses || <div className="card-body text-center">
                    <h2 className="text-xl font-semibold text-center">{instructorName}</h2>
                    <p> <span className="font-semibold">Email : </span> {instructorEmail}</p>
                    <p>Student Number : {studentNumber}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-error rounded-sm  lg:px-6 text-white mr-4 mt-2">See Details</button>
                    </div>
                </div>
            }

        </div>
    );
};

export default PopularClassCard;