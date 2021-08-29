import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
  <div>
  <ul style={{marginTop:"-60px"}} class="nav">
  <li class="nav-item">
    <a class="nav-link text-light " aria-current="page" href="#"> <span style={{fontSize:"50px"}}> POWER X </span></a>
  </li>
  </ul>
    

     

      <ul style={{marginRight:"30px"}} class="nav justify-content-end ">
  <li class="nav-item">
    <Link to ="/home"> <a class="nav-link text-light" aria-current="page" href="#">Home</a></Link>
  </li>
  <li class="nav-item">
    <a class="nav-link text-light" href="#">Services</a>
  </li>
  <li class="nav-item">
   <Link to="/training"> <a class="nav-link text-light" href="#">Our classes</a></Link>
  </li>
  <li class="nav-item">
    <a class="nav-link text-light" href="#" >About Us </a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-light" href="#" >Blog </a>
  </li>
  <li class="nav-item">
   <Link to="/pricing"> <a class="nav-link text-light" href="#" >Pricing</a></Link>
  </li>
  <li class="nav-item">
    <a class="nav-link text-light" href="#" >Contact Us </a>
  </li>
</ul>
</div>  
    );
};

export default NavBar;