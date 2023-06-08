
const PopularClassCard = ({ classInfo, onlyClasses }) => {
    const { classImage, className, instructorImage, instructorName, instructorEmail, studentNumber } = classInfo;
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
                        <h2 className="card-title">{className}-Yoga</h2>
                        <p>Student Number : {studentNumber}</p>
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