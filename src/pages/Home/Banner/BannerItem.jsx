import './BannerItem.css';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const BannerItem = ({ data }) => {
    const { image, prev, next, id } = data;

    const style = {
        fontFamily: 'Playfair Display, serif'
    };

    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img'>
                <img src={image} alt="" className='rounded-none w-full' />

            </div>
            <div className="w-3/5  pt-10 absolute justify-end transform -translate-y-1/2 left-24  top-1/2">
                <h1 style={style} className='lg:text-6xl text-xl font-bold text-white lg:mb-6'>Taking Yoga Beyond The <br></br> Limit Reach Your <br></br> New Potential</h1>
                <p className='text-white text-xs lg:text-xl lg:mb-5'>Yoga is actually an exercise of body and mind. The benefits of yoga not only help the body become fresher and filter,but also can control stress.</p><br />
                <div className=''>
                    <button className="btn btn-error rounded-sm p-2 lg:px-6 text-white mr-4 mb-8">Explore More</button>
                    <button className="btn btn-outline btn-error p-2 lg:inline-block hidden rounded-sm  lg:px-8 text-white">Join Classes</button>

                </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${prev}`} className="btn btn-circle bg-transparent hover:bg-red-400 border-0 mr-5 text-gray-400"><BsChevronLeft className='lg:w-10 lg:h-10'></BsChevronLeft></a>
                <a href={`#slide${next}`} className="btn btn-circle bg-transparent hover:bg-red-400 border-0 text-gray-300"><BsChevronRight className='lg:w-10 lg:h-10'></BsChevronRight></a>
            </div>
        </div>
    );
};

export default BannerItem;