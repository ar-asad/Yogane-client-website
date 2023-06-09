import { useQuery } from "@tanstack/react-query";

const useClasses = () => {
    const { refetch, data: classes = [], isLoading: loading, } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/classes');
            return res.json();
        }
    })
    console.log(classes);
    return [classes, loading, refetch]
};


export default useClasses;