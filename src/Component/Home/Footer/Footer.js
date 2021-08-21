import React from 'react';
import { FaYoutube,FaFacebookF,FaInstagram,FaTwitter,FaWhatsapp } from 'react-icons/fa';
const Footer = () => {
    return (
        <div style={{backgroundColor:"#171426"}} className="row text-white">
            <div className="col-md-4 ">
                <h3> POWER <span style={{color:"yellow"}}>X </span>  </h3>
            </div>
            <div className="col-md-2">
                <p> Need Help?</p>
            <p> Help center</p>
            <p>email support</p>
             <p>live chat</p>
            <p>gift certificates</p>
            <p>send us feedback</p>
            </div>
            <div className="col-md-2">
               <p> Digital resources</p>
               <p>Articles</p>
               <p> E-books</p>
            </div>
            <div className="col-md-2">
                <p>Connect with us</p>
                <FaYoutube/> <FaFacebookF/> <FaInstagram/> <FaTwitter/> <FaWhatsapp/>
                <p>forums</p>
            </div>
            <div className="col-md-2">
                <p> dfefef </p>
                <p>dfefe</p>
                <p>sfefef</p>
            </div>
        </div>
    );
};

export default Footer;