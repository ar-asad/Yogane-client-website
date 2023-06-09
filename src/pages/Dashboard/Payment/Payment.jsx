import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLoaderData, useNavigation } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";

// const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);
const stripePromise = loadStripe('pk_test_51N5nhKEvhOZV6x6TPUMU2WBYxoTPqBZwu4P2aps8nXJUFCMEY4CAeDXSjvsVLkTYQ66IDuvYyCs5SrxzR7v8ckST00vtAHh20S');
console.log(stripePromise);

const Payment = () => {
    const payClass = useLoaderData();
    const navigation = useNavigation();
    const { className, price } = payClass;

    if (navigation.state === 'loading') {
        return <h2 className='text-4xl font-semibold'>Loading.....</h2>
    }

    return (
        <div>
            <h2 className='text-4xl mb-5'>Payment for {className}</h2>
            <p className='text-xl'>Please pay <strong>${price}</strong> for your selectedClass.</p>

            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm
                        payClass={payClass}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;