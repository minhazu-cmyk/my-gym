import React from 'react';
import PersonalDetailsHeader from '../PersonalDetails/PersonalDetailsHeader';
import Footer from '../Home/Footer/Footer';
import Payment from './Payment';

const GymMembership = () => {
    return (
        <div>
            <PersonalDetailsHeader></PersonalDetailsHeader>
            <Payment></Payment>
            <Footer></Footer>
            
        </div>
    );
};

export default GymMembership;