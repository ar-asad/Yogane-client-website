import useClasses from "../../hooks/useClasses";
import PopularClassCard from "../Home/PopularClassCard/PopularClassCard";


const AllInstructors = () => {
    const [classes] = useClasses();

    return (
        <div className='mb-10  pt-1 pb-20'>
            <div className='text-center my-24 '>
                <div className="mx-auto text-center md:w-4/12 mb-4">
                    <p className=' font-semibold text-red-500  uppercase border-b-2 border-red-400'>Instructors</p>
                </div>
                <h2 className=' lg:text-5xl text-4xl font-bold'>Our All Instructors <br></br>here </h2>
            </div>

            <div className='w-4/5 flex mx-auto'>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
                    {
                        classes.map(classInfo => <PopularClassCard key={classInfo._id} classInfo={classInfo}></PopularClassCard>)
                    }
                </div>
            </div>

        </div>
    );
};

export default AllInstructors;