import React from 'react';
import { Link } from 'react-router-dom';

const PersonalInfo = () => {
    return (
        <form className="mb-5 ms-5">
        <div className="row mt-5  form-group">
           <div className="col-md-5 form-group">
             <label for="firstName">First Name</label> 
             <input type="text" class="form-control" placeholder="First name"/>
             <br/>
             <label for="email"> Email</label>
             <input type="email" class="form-control" placeholder="email"/>
             <br/>
             <label for="Date of Birth">Date of Birth </label>
             <input type="date" id="birthday" name="birthday"></input>
             <br/>
             <br/>
             <label for="address">Address line 1</label> 
             <input type="text" class="form-control" placeholder="address"/>
             <br/>
             <label for="city">city</label> 
             <input type="text" class="form-control" placeholder="city"/>
             </div> 
           <div className="col-md-5 form-group">
               <label for="lastName"> Last Name</label>
               <input type="text" class="form-control" placeholder="last name"/>
               <br/>
               <label for="mobileNumber"> Mobile Number</label>
               <input type="text" class="form-control" placeholder="mobile number"/>
               <br/>
               <label for="cars">Gender</label>
            <select name="gender" id="gender">
             <option value="male">Male</option>
              <option value="female">Female</option>
                <option value="common">common</option>
         </select>
         <br/>
         <br/>


               <label for="country"> Country Region </label>
              <input type="text" class="form-control" placeholder="country region"/>
              <br/>
               <label for="postCode"> post code</label>
               <input type="text" class="form-control" placeholder="post code"/> <br/>
              
               </div> 
        </div>
        <Link to="payment"> <button className="d-flex justify-content-end btn btn-primary" type="submit"> NEXT</button></Link>
        </form>
    );
};

export default PersonalInfo;