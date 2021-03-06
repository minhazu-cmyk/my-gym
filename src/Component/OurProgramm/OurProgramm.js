import React from 'react';
import OurProgrammDetails from './OurProgrammDetails';
const information =[
    {  background:"https://i.ibb.co/ctD2GNc/hipcravo-5-Ub-Iq-V58-CW8-unsplash.jpg",
        title: "PROGRESSION",
        icon:"https://i.ibb.co/KbW9ZSY/Group-80.png",
        description:"irfjij reijtiwerj weritw4ie4r weitjew wiewe  wefjweirf "
    },
    {   background:"https://i.ibb.co/BwrMscq/daniel-apodaca-Wdo-Qio6-HPVA-unsplash.jpg",
        title:"Workout",
        icon:"https://i.ibb.co/wSJnDdq/Group-81.png",
        description:"erjueiw rijr egjrgei rjgiweroierhrh riehei rgirwer weihr "
    },
    {  background:"https://i.ibb.co/RYn4NDQ/penguinuhh-8-VI6-Ww-EEEHw-unsplash.jpg",
        title:"NUTRITION",
        icon:"https://i.ibb.co/tCFsrjJ/Group-82.png",
        description:" EHFIH DSJFI SIHISD IDRSJIH HRGI RIGJ OER GJRI9 ERFGJ "
    },

];
const OurProgramm = () => {
    return (
        <div className="row">
            {
                information.map(x=> <OurProgrammDetails item={x}></OurProgrammDetails> )
            }
        </div>
    );
};

export default OurProgramm;