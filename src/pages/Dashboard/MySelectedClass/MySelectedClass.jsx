
import MySelectedClassCard from "../MySelectedClassCard/MySelectedClassCard";
import useSelectClass from "../../../hooks/useSelectClass";


const MySelectedClass = () => {
    const [mySelectclass] = useSelectClass();

    const withoutPayClasses = mySelectclass.filter(classes => classes.paid !== true)
    console.log(withoutPayClasses);

    return (
        <div className="overflow-x-auto w-full p-10">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>
                        </th>
                        <th>Class </th>
                        <th>Class Name</th>
                        <th>Class Price</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        withoutPayClasses.map((selectClass, index) => <MySelectedClassCard
                            key={selectClass._id}
                            index={index}
                            selectClass={selectClass}
                        >
                        </MySelectedClassCard>)
                    }
                </tbody>
            </table>

        </div>
    );
};

export default MySelectedClass;