import React from 'react';

const OurProgrammDetails = (props) => {
    const {title,description,background,icon} =props.item
    console.log(props.item)
    return (
        <div  style={{ backgroundSize:"cover",
    backgroundRepeat:"no-repeat",
    height:"400px",
    width:"",
         backgroundImage:`url(${background})` }} class="card col-md-4" >
    <img  style={{ marginTop:"200px", width:"100px", height:"100px"}} src={icon} alt=""/>
        <div class="card-body">
        <h5 class="card-title text-white
      ">{title} </h5>
          <p class="card-text text-white">{description} </p>
        </div>
      </div>
      
    );
};

export default OurProgrammDetails;