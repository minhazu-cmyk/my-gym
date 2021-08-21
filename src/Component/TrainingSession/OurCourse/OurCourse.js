import React from 'react';

const info =[
{ 
    img:"https://i.ibb.co/QMqpjvd/physco.png",
    description:"physco training"
},
{ 
    img:"https://i.ibb.co/RbjBjvY/defence.jpg",
    description:"self defence"
},
{ 
    img:"https://i.ibb.co/1sw6WFW/advance.jpg",
    description:"advance gym"
},
{ 
    img:"https://i.ibb.co/Z8xLPmK/cardio-2.jpg",
    description:"cardio training"
},
{ 
    img:"https://i.ibb.co/X5LMQT0/strength.jpg",
    description:"strength training"
},
{ 
    img:"https://i.ibb.co/gmy3Df3/training.jpg",
    description:"physco training"
},
]
const OurCourse = () => {
    return (
        <div style={{marginLeft:"170px", marginBottom:"50px" }} className="row w-75  mt-5">
           
           {info.map(x=>    <div  style={{ backgroundSize:"cover",
    backgroundRepeat:"no-repeat",
    height:"250px",
    width:"250",margin:"15px", backgroundImage:`url(${x.img})` }} class="card col-md-3  ">
 
  <div  class="card-body text-center">
 <h6 style={{backgroundColor:"yellow",height:"35px",marginTop:"220px"}}>{x.description} 
  </h6>
  </div>
</div>)}
           
        </div>
    );
};

export default OurCourse;