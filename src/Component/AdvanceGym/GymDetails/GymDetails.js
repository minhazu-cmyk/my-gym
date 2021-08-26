import React from 'react';
import advance from '../../../Image & Icon/advance.jpg'
import { FaCheckSquare } from 'react-icons/fa';

const GymDetails = () => {
    return (
        <div className="row ms-5 mt-5">
           <div className="col-md-6">
               <img style={{width:"400px",  height:"300px"}} src={advance} alt=""/>
            <p> jhgruhf jfhurehei urehurhf erhiehe ruherh eht8iehfew ruh u8u <br/> e t88ew eut9uety dihi siehfief  eriu9eu eieug <br/>eeu9ef eijefje eisfue9 fe  ef9euf9ewuf9ewoiihg h dfhrf9o <br/> iuehfiejfiehfuhf jiejfiehfiuehf <br/>ejfewijfehfewiu  ejfiewhfiuehfew ewjiehfefoiefiuewfoh rjffro <br/>  erjfoefu89euf e fueueruieru <br/> eruf8eufewu e egue9 eu uer 8reu er9gure g9uer ru reg 9re g9</p>

            <h5> <FaCheckSquare/> having slimmer  </h5>
            <h5> <FaCheckSquare/>  stronger body </h5>
            <h5><FaCheckSquare/> strngth body  </h5>
            <h5><FaCheckSquare/>  big musscle </h5>
            <h5><FaCheckSquare/>  having slimmer  </h5>
            <h5><FaCheckSquare/>  having slimmer  </h5>
            <h5><FaCheckSquare/>  having slimmer  </h5>
           </div> 
          <div className="col-md-5 mb-5">
              <h3> class schedule</h3>
          <table  style={{width:"100%"}}>
  
  <tr >
    <td> <strong> monday </strong></td>
    <td><strong> tuesday</strong></td>
    
  </tr>
  <tr>
    <td> <small>8am-7am  </small></td>
    <td>6am-7am</td>
    
  </tr>
  <tr>
    <td> <strong> wednesday </strong></td>
    <td><strong> thursday </strong></td>
   
  </tr>
  <tr>
    <td> <small>8am-7am  </small></td>
    <td>6am-7am</td>
    
  </tr>
  
</table>
<button style={{marginTop:"500px",width:"80px"}} type="text"> join us </button>
          </div>
  
            
        </div>
    );
};

export default GymDetails;