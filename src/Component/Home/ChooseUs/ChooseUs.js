import React from 'react';
const info= [

    {
        title:"Free fitness training",
    icon:"https://i.ibb.co/5MnJ2LW/six-pack.png",
    description:" bjefj bfje fjehde jfewjf jefuewh hebfeb"
},
{
    title:"TONS OF CARDIO AND STRENGTH",
    icon:"https://i.ibb.co/HFMp2wJ/cycle.png",
    description:" bjefj bfje fjehde jfewjf jefuewh hebfeb"   
},
{   title:"NO COMMENT MEMBERSHIP",
icon:"https://i.ibb.co/bBmkWN2/gift-2.png",
description:" bjefj bfje fjehde jfewjf jefuewh hebfeb"
}

]
const ChooseUs = () => {
    return (
        <section>
            <h5 className=" d-flex justify-content-center mt-5"> Why choose us</h5>
            <div className="row w-80  d-flex justify-content-center mt-5" >
                {info.map(x=>    <div class="card col-md-3 shadow p-3 mb-5 bg-body rounded ">
 <img style={{width:"60px",  height:"60px",marginLeft:"60px"  }} src={x.icon} alt=""/>
  <div class="card-body">
    <h5 class="card-title">{x.title}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
  </div>
</div>)}
            </div>
            
        </section>
    );
};

export default ChooseUs;