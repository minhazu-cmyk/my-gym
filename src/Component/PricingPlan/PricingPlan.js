import React from 'react';
import PricingDetails from './PricingDetails/PricingDetails';
import Footer from '../Home/Footer/Footer';
import PricingHeader from './PricingHeader/PricingHeader';

const PricingPlan = () => {
    return (
        <div>
            <PricingHeader></PricingHeader>
            <PricingDetails></PricingDetails>
            <Footer></Footer>
        </div>
    );
};

export default PricingPlan;