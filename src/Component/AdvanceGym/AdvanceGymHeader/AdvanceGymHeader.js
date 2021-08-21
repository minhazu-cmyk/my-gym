import React from 'react';
import background from '../../../Image & Icon/background.jpg'
import NavBar from '../../NavBar/NavBar';
const AdvanceGymHeader = () => {
    return (
        <div style={{ width: '100%',
        height: '600px',
        paddingTop:"80px",
        backgroundPosition:"5px -70px",
        backgroundSize: 'cover' ,
           backgroundImage:`url(${background})` }}>
          <NavBar></NavBar>
        <div className="d-flex justify-content-center text-white mt-5 ">
             <h3> OUR CLASSES</h3>
               </div>
               </div>
    );
};

export default AdvanceGymHeader;