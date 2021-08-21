import React from 'react';
import youga from '../../../Image & Icon/youga.png'
import cardio from '../../../Image & Icon/cardio.jpg'
const Training = () => {
    return (
        <section>
            <h3 className=" d-flex justify-content-center mt-5"> our Training programme</h3>
    <div className="row d-flex justify-content-around mt-5">
              <div  style={{backgroundSize:"cover",
    backgroundRepeat:"no-repeat",
    height:"300px",
    marginLeft:"350px",
    width:"300px", backgroundImage:`url(${youga})` }} className="col-md-6  ">
               <div style={{marginTop:"200px", backgroundColor:"yellow",height:"50px"}}>
                 <h5> Yoga training session </h5>
               </div>  
                  
              </div  >
              <div  style={{backgroundSize:"cover",
    backgroundRepeat:"no-repeat",
    height:"300px",
    width:"300px",
    marginRight:"350px", backgroundImage:`url(${cardio})` }}className="col-md-6">
                  <div style={{marginTop:"200px",backgroundColor:"yellow",height:"50px"}}  >
                
                    <h5> cardio training session</h5> 
                  </div>
              </div>
          </div>  
        </section>
    );
};

export default Training;