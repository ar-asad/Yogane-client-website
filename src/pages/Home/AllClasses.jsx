import useClasses from "../../hooks/useClasses";
import PopularClassCard from "./PopularClassCard/PopularClassCard";


const AllClasses = () => {
    const [classes] = useClasses();
    // custom font-family use
    const style = {
        fontFamily: 'Playfair Display, serif'
    };

    return (
        <div className='  pt-1 pb-20'>
            <div style={style} className='text-center my-24 '>
                <div className="mx-auto text-center md:w-4/12 mb-4">
                    <p className=' font-semibold text-red-500  uppercase border-b-2 border-red-400'>All Here</p>
                </div>
                <h2 className=' lg:text-5xl text-4xl font-bold'>Check Out Our<br></br> All Classes</h2>
            </div>

            <div className='w-4/5 flex mx-auto'>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
                    {
                        classes.map(classInfo => <PopularClassCard allClasses={true} onlyClasses={true} key={classInfo._id} classInfo={classInfo}></PopularClassCard>)
                    }
                </div>
            </div>

        </div>
    );
};

export default AllClasses;