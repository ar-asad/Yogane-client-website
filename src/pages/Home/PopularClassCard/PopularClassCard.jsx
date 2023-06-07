
const PopularClassCard = ({ classInfo, onlyClasses }) => {
    const { classImage, className, instructorImage, instructorName, instructorEmail } = classInfo;
    return (
        <div className="card bg-base-100 shadow-xl">
            {
                onlyClasses ? <figure><img src={classImage} alt="Yoga" /></figure>
                    :
                    <figure><img src={instructorImage} alt="Yoga" /></figure>
            }
            {
                onlyClasses && <div>
                    <div className="avatar">
                        <div className="w-12 rounded-full">
                            <img src={instructorImage} />
                        </div>
                    </div>
                    <p>{instructorName}</p>
                    <div className="card-body">
                        <h2 className="card-title">{className}-Yoga</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
            }
            {
                onlyClasses || <div className="card-body text-center">
                    <h2 className="text-xl font-semibold text-center">{instructorName}</h2>
                    <p> <span className="font-semibold">Email : </span> {instructorEmail}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-error rounded-sm  lg:px-6 text-white mr-4 mt-2">See Details</button>
                    </div>
                </div>
            }

        </div>
    );
};

export default PopularClassCard;