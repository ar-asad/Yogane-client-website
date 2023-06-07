
const PopularClassCard = ({ classInfo }) => {
    const { classImage, className, instructorImage, instructorName } = classInfo;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={classImage} alt="Yoga" /></figure>
            <div className="avatar">
                <div className="w-12 rounded-full">
                    <img src={instructorImage} />
                </div>
            </div>
            <p>{instructorName}</p>
            <div className="card-body">
                <h2 className="card-title">{className}-Yoga</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default PopularClassCard;