import useClasses from "../../../hooks/useClasses";
import useToggleMode from "../../../hooks/useToggleMode";
import PopularClassCard from "../PopularClassCard/PopularClassCard";


import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const PopularClasses = () => {
    const [classes] = useClasses();
    const [darkMode] = useToggleMode();


    const sortedByStudents = [...classes].sort((a, b) => b.studentNumber - a.studentNumber);

    const topSixClasses = sortedByStudents.slice(0, 6);

    return (
        <div className=''>
            <div className='text-center my-24 '>
                <div className="mx-auto text-center md:w-4/12 mb-4">
                    <p data-aos="fade-right" className=' font-semibold text-red-500 w-1/2 mx-auto uppercase border-b-2 border-red-400'>Popular</p>
                </div>
                <h2 data-aos="fade-left" className={darkMode ? ' lg:text-5xl text-4xl text-white font-bold' : ' lg:text-5xl text-4xl font-bold'}>Check Out Some Of <br></br> Our Classes</h2>
            </div>

            <div className='w-4/5 flex mx-auto'>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
                    {
                        topSixClasses.map(classInfo => <PopularClassCard onlyClasses={true} key={classInfo._id} classInfo={classInfo}></PopularClassCard>)
                    }
                </div>
            </div>

        </div>
    );
};

export default PopularClasses;