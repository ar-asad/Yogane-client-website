import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const CheckOutForm = ({ payClass }) => {
    const { user } = useContext(AuthContext)
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');

    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    const { price, className, _id, classId, instructorName } = payClass;
    console.log(payClass);

    // useEffect(() => {
    //     axiosSecure.post('/create-payment-intent', { price })
    //         .then(res => {
    //             console.log(res.data.clientSecret)
    //             setClientSecret(res.data.clientSecret);
    //         })
    // }, [])
    useEffect(() => {
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('error', error)
            setCardError(error.message);
        }
        else {
            setCardError('');
        }

        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }

        console.log('payment intent', paymentIntent)
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            // store payment info in the database
            const payment = {
                price,
                transactionId: paymentIntent.id,
                className,
                instructorName,
                email: user?.email,
                paymentId: classId,
                selectedId: _id,
                date: new Date()
            }
            // axiosSecure.post('/payments', payment)
            //     .then(res => {
            //         console.log(res.data);
            //         if (res.data.result.insertedId) {
            //             // display confirm
            //         }
            //     })

            fetch('http://localhost:5000/payment', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    // authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.insertedId) {
                        // setSuccess('Congrats! your payment completed')
                        // navigate('/dashboard')

                    }
                })
        }


    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-primary mt-4 btn-sm' type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
            {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}
        </>
    );
};

export default CheckOutForm;