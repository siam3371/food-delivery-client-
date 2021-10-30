import React from 'react'; 
import './Footer.css'
const Footer = () => { 
    return (
        <div>
            <> 
{/* website most important footer part */}
<div className="container-fluid mt-5 bg-dark  p-5"> 
{/* responsive bootstrap */}
<div className="row">
             <div className="col-lg-4 col-12 col-md-6 footer">
                 <h2 className="text-white">Contact Information</h2>
                 <br /> 
             <p><i className="fa fa-map-marker me-2" aria-hidden="true"></i>   
                 Brooklyn, NY 10036
                United States </p>
<p> <i className="fas fa-envelope me-2"></i>example@example.com</p>
<p> <i className="fas fa-mobile me-2"></i>Call Us: +1-800-123-1234</p> 
              </div>
             <div className="col-lg-4 col-12 col-md-6 footer">
                 <h2 className="text-white">Meet Our Best Team</h2>
             <div className="footer-information">
             <p>Dr. Luke Slater</p>
                 <p>  Nicole Jennings</p>
                 <p>  Andrew Cross</p>
                 <p>  John Banks</p>
                 <p>  Rebecca Heston</p>
                 <p> William Brown</p>
             </div>
             </div>
  
             <div className="col-lg-4 col-12 col-md-6 footer">
                 <h2 className="text-white">Opening Hours</h2>
                <div className="footer-information">
                <p>Mon – Thu 7.00 – 20.00</p>
                 <p>Friday 7.00 – 19.00</p>
                 <p>Saturday 9.00 – 16.00</p>
                 <p>Sunday 9.00 – 13.00</p>
                </div>
             </div>
         </div>
         <p className="footer text-center mt-5"> 
Copyright © 2021 Siam Hossain Reserved.</p>
</div>
</>
        </div>
    );
};

export default Footer;