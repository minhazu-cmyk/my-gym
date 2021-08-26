import React from 'react';
import { MdDone } from 'react-icons/md';

const info= [
    {title:"ADVANCE PLAN",
    price:"$120",
    
      pay:"PURCHASE",
      background:"https://i.ibb.co/ctD2GNc/hipcravo-5-Ub-Iq-V58-CW8-unsplash.jpg"
    },
    {title:"BASIC PLAN",
    price:"$100",
  
    background:"https://i.ibb.co/BwrMscq/daniel-apodaca-Wdo-Qio6-HPVA-unsplash.jpg"
    },
    {title:"BEGINER PLAN",
    price:"$90",
    
    pay:"PURCHASE",
    background:"https://i.ibb.co/RYn4NDQ/penguinuhh-8-VI6-Ww-EEEHw-unsplash.jpg"
    },



];
const PricingDetails = () => {
    return (
        <section className="mb-5">
            <h3 className=" d-flex justify-content-center mt-5 mb-5"> Choose the offer that suits you<br/></h3>
             <div className="row ms-5">
                 {
                     info.map(x=><div  style={{ backgroundSize:"cover",
                     backgroundRepeat:"no-repeat",
                     height:"400px",
                    width:"400px",
                    marginLeft:"10px",
                          backgroundImage:`url(${x.background})` }} class="card col-md-4" >
                     
                         <div class="card-body " style={{marginLeft:"150px",marginTop:"80px"}}>
                         <h5 class="card-title text-white
                       ">{x.title} </h5>
                       <h2 style={{color:"yellow"}}>{x.price} </h2>
                           <p style={{color:"white"}}><MdDone/>mobile optimize</p>
                           <p style={{color:"white"}}> <MdDone/>best hosting</p>
                           <p style={{color:"white"}}><MdDone/>free coustom</p>
                           <p style={{color:"white"}}><MdDone/>out standing</p>
                           <button style={{backgroundColor:"yellow"}} type="text">{x.pay} </button>
                         </div>
                       </div>)
                 }
             </div>

        </section>
    );
};

export default PricingDetails;