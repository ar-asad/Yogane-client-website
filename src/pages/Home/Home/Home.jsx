import Banner from "../Banner/Banner";
import Instructors from "../Instructors/Instructors";
import PopularClasses from "../PopularClasses/PopularClasses";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <Instructors></Instructors>
        </div>
    );
};

export default Home;