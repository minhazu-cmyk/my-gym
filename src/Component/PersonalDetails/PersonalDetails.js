import React from 'react';
import PersonalDetailsHeader from './PersonalDetailsHeader';
import PersonalInfo from './PersonalInfo';
import Footer from '../Home/Footer/Footer';

const PersonalDetails = () => {
    return (
        <div>
            <PersonalDetailsHeader></PersonalDetailsHeader>
            <PersonalInfo></PersonalInfo>
            <Footer></Footer>
            
        </div>
    );
};

export default PersonalDetails;