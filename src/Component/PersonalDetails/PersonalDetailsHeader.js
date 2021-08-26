import React from 'react';
import background from '../../Image & Icon/background.jpg'
import NavBar from '../NavBar/NavBar';

const PersonalDetailsHeader = () => {
    return (
        <div style={{ width: '100%',
        height: '600px',
        paddingTop:"80px",
        backgroundPosition:"5px -70px",
        backgroundSize: 'cover' ,
           backgroundImage:`url(${background})` }}>
          <NavBar></NavBar>
        <div className="d-flex justify-content-center text-white mt-5 ">
             <h3> YOUR GYM MEMBERSHIP</h3>
               </div>
               </div>
    );
};

export default PersonalDetailsHeader;