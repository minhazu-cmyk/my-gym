import React from 'react';
import OurProgrammDetails from './OurProgrammDetails';
const information =[
    {  background:"https://assets3.thrillist.com/v1/image/1679696/size/tmg-facebook_social.jpg",
        title: "PROGRESSION",
        description:"irfjij reijtiwerj weritw4ie4r weitjew wiewe  wefjweirf "
    },
    {   background:"https://i.ibb.co/BwrMscq/daniel-apodaca-Wdo-Qio6-HPVA-unsplash.jpg",
        title:"Workout",
        description:"erjueiw rijr egjrgei rjgiweroierhrh riehei rgirwer weihr "
    },
    {  background:"https://i.ibb.co/RYn4NDQ/penguinuhh-8-VI6-Ww-EEEHw-unsplash.jpg",
        title:"NUTRITION",
        description:" EHFIH DSJFI SIHISD IDRSJIH HRGI RIGJ OER GJRI9 ERFGJ "
    },

]
const OurProgramm = () => {
    return (
        <div className="row">
            {
                information.map(x=> <OurProgrammDetails item={{x}}></OurProgrammDetails> )
            }
        </div>
    );
};

export default OurProgramm;