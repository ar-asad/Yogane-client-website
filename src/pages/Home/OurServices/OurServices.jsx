
import img1 from '../../../assets/services/service1.png'
import img2 from '../../../assets/services/service2.png'
import img3 from '../../../assets/services/service3.png'
import img4 from '../../../assets/services/service4.png'
import OurService from '../OurService/OurService';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const OurServices = () => {
    const services = [
        {
            id: 1,
            name: 'Yoga Professional Cources',
            image: img4,
            description: "The Professional Yoga Course is a comprehensive program designed for individuals who are."
        },
        {
            id: 2,
            name: 'Spa Treatments',
            image: img1,
            description: "This treatment combines gentle yoga movements, stretching, and breathing exercises with therapeutic massage."
        },
        {
            id: 3,
            name: 'Nutrition Strategies',
            image: img3,
            description: "Yoga nutrition refers to the practice of mindful eating and making conscious choices about the food."
        },
        {
            id: 4,
            name: 'Relaxing Herbal Bar',
            image: img2,
            description: "A wide selection of herbal teas and infusions made from natural ingredients like chamomile."
        }
    ]

    return (
        <div>
            <div className='text-center lg:mt-24 '>
                <div className="mx-auto text-center md:w-4/12 mb-16">
                    <p data-aos="fade-right" className=' font-semibold text-red-500 mb-4 w-1/2 mx-auto uppercase border-b-2 border-red-400 '>Who We Are</p>
                    <h2 data-aos="fade-left" className=' lg:text-5xl text-3xl font-bold'>Our Main Services</h2>
                </div>
                <div className='w-4/5 flex mx-auto'>
                    <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1'>
                        {
                            services.map(service => <OurService key={service.id} service={service}></OurService>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;