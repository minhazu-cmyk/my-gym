import React from 'react';
import AdvanceGymHeader from './AdvanceGymHeader/AdvanceGymHeader';
import GymDetails from './GymDetails/GymDetails';
import Footer from '../Home/Footer/Footer';

const AdvanceGym = () => {
    return (
        <div>
          <AdvanceGymHeader></AdvanceGymHeader>  
          <GymDetails></GymDetails>
          <Footer></Footer>
        </div>
    );
};

export default AdvanceGym;