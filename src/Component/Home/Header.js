import React from 'react';
import background from '../../../src/Image & Icon/background.jpg'
const Header = () => {
    return ( 
     
     <div style={{ width: '100%',
     height: '650px',
     paddingTop:"80px",
     backgroundPosition:"0px -50px",
     backgroundSize: 'cover' ,
        backgroundImage:`url(${background})` }}>
     <div style={{marginLeft:"20px",marginTop:"100px"}}>
        <h1 style={{color:"white",fontSize:"45px"}}> THE BEST FITNESS <br/> STUDIO IN TOWN</h1>
           <br/>
           <p style={{color:"white"}}> this is the best gym in the town, where u can <br/> strength ur body and shape ur body. we have lot of <br/> courses for body shaping such as egfyg asdnuyg <br/> cafguwuieg fewiehfu erwieufe weufhewu ewuu edu  </p>
        
            <br/> 
            <button style={{backgroundColor:"#E1C13E",height:"40px" ,width:"100px",borderRadius:"5px "}}> Join us</button>
            </div>
            </div>
      
    );
};

export default Header;