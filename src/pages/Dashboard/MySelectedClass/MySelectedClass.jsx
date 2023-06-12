
import MySelectedClassCard from "../MySelectedClassCard/MySelectedClassCard";
import useSelectClass from "../../../hooks/useSelectClass";


const MySelectedClass = () => {
    const [mySelectclass, refetch] = useSelectClass();

    const withoutPayClasses = mySelectclass.filter(classes => classes.paid !== true)


    return (
        <div className="overflow-x-auto w-full p-10 mt-16">
            <table className="table w-full ">
                <thead className="bg-gray-200">
                    <tr>
                        <th>

                        </th>
                        <th>Class </th>
                        <th>Class Name</th>
                        <th>Class Price</th>
                        <th>Action</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        withoutPayClasses.map((selectClass, index) => <MySelectedClassCard
                            key={selectClass._id}
                            index={index}
                            refetch={refetch}
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