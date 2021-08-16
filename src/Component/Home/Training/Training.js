import React from 'react';
import youga from '../../../Image & Icon/youga.png'
import cardio from '../../../Image & Icon/cardio.jpg'
const Training = () => {
    return (
        <section>
            <h5 className="d-flex justify-content-center">Training  <span style={{color:"yellow"}}>programme </span>  </h5>
          <div className="row">
              <div  style={{ backgroundImage:`url(${youga})` }} className="col-md-6">
                  
              </div  >
              <div  style={{ backgroundImage:`url(${car})` }}className="col-md-6">
                  
              </div>
          </div>  
        </section>
    );
};

export default Training;