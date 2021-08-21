import React from 'react';
import Footer from '../Home/Footer/Footer';

import Header from '../Home/Header';
import NavBar from '../NavBar/NavBar';
import OurClasses from './OurClasses/OurClasses';
import OurCourse from './OurCourse/OurCourse';

const TrainingSession = () => {
    return (
       <div>
           <OurClasses/>
          <OurCourse></OurCourse>
          <Footer></Footer>
       </div>
    );
};

export default TrainingSession;