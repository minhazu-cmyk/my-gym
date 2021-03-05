import React from 'react';

const OurProgrammDetails = (props) => {
    const {title,description,background} =props.item
    console.log(props.item)
    return (
        <div class="card col-md-4" >
        <img class="card-img-top" src={background} alt="Card image cap"/>
        <div class="card-body">
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      
    );
};

export default OurProgrammDetails;