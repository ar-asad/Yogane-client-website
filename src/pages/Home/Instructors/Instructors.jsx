import useClasses from "../../../hooks/useClasses";
import PopularClassCard from "../PopularClassCard/PopularClassCard";
// import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
const Instructors = () => {
    const [classes] = useClasses();
    const style = {
        fontFamily: 'Playfair Display, serif'
    };

    const sortedByStudents = [...classes].sort((a, b) => b.studentNumber - a.studentNumber);

    const topSixInstructors = sortedByStudents.slice(0, 6);

    return (
        <div className='mb-10  pt-1 pb-20'>
            <div style={style} className='text-center my-24 '>
                <div className="mx-auto text-center md:w-4/12 mb-4">
                    <p data-aos="fade-right" className=' font-semibold text-red-500 w-1/2 mx-auto uppercase border-b-2 border-red-400'>Instructors</p>
                </div>
                <h2 data-aos="fade-left" className=' lg:text-5xl text-4xl font-bold'>Our Expert And <br></br> Talented Trainers</h2>
            </div>

            <div className='w-4/5 flex mx-auto'>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
                    {
                        topSixInstructors.map(classInfo => <PopularClassCard key={classInfo._id} classInfo={classInfo}></PopularClassCard>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Instructors;