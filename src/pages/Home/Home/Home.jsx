import Banner from "../Banner/Banner";
import Instructors from "../Instructors/Instructors";
import OurServices from "../OurServices/OurServices";
import PopularClasses from "../PopularClasses/PopularClasses";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurServices></OurServices>
            <PopularClasses></PopularClasses>
            <Instructors></Instructors>
        </div>
    );
};

export default Home;