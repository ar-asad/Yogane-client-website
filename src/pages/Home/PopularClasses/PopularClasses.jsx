import useClasses from "../../../hooks/useClasses";
import useToggleMode from "../../../hooks/useToggleMode";
import PopularClassCard from "../PopularClassCard/PopularClassCard";

const PopularClasses = () => {
    const [classes] = useClasses();
    const [darkMode] = useToggleMode();
    console.log(darkMode)

    // custom font-family use
    const style = {
        fontFamily: 'Playfair Display, serif'
    };

    const sortedByStudents = [...classes].sort((a, b) => b.studentNumber - a.studentNumber);

    const topSixClasses = sortedByStudents.slice(0, 6);

    return (
        <div className='pt-1 pb-20'>
            <div style={style} className='text-center my-24 '>
                <div className="mx-auto text-center md:w-4/12 mb-4">
                    <p className=' font-semibold text-red-500  uppercase border-b-2 border-red-400'>Popular</p>
                </div>
                <h2 className={darkMode ? ' lg:text-5xl text-4xl text-white font-bold' : ' lg:text-5xl text-4xl font-bold'}>Check Out Some Of <br></br> Our Classes</h2>
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