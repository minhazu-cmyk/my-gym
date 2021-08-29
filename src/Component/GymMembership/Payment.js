import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import PaymentProcess from './PaymentProcess';

const stripePromise = loadStripe('pk_test_51HbBhUDsFIJUppxgjCsUDwa44FUhLWbGi0gXc6NClPUhxSwDU3Uz5nIN8lZ15PTjGV0mvZHj3Ntck9LSti3MOobY00ZLU1CAJw');
const Payment = () => {
    return (
        <Elements stripe={stripePromise}>
     <PaymentProcess/>
    </Elements>
    );
};

export default Payment;